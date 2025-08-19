const VND_PER_USD_DEFAULT = 25000;

function prompt(question: string): Promise<string> {
  const readline = require("readline");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>((resolve) =>
    rl.question(question, (ans: string) => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

class Passenger {
  public readonly passengerId: number;
  public name: string;
  public passportNumber: string;

  constructor(passengerId: number, name: string, passportNumber: string) {
    this.passengerId = passengerId;
    this.name = name;
    this.passportNumber = passportNumber;
  }

  getDetails(): string {
    return `#${this.passengerId} | ${this.name} | Passport: ${this.passportNumber}`;
  }
}

abstract class Flight {
  public readonly flightNumber: string;
  public origin: string;
  public destination: string;
  public departureTime: Date;
  public capacity: number;
  public bookedSeats: number;
  public baseFareVND: number;

  protected constructor(
    flightNumber: string,
    origin: string,
    destination: string,
    departureTime: Date,
    capacity: number,
    baseFareVND: number
  ) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = departureTime;
    this.capacity = capacity;
    this.baseFareVND = baseFareVND;
    this.bookedSeats = 0;
  }

  bookSeat(): void {
    if (this.isFull()) throw new Error("Chuyến bay đã đầy!");
    this.bookedSeats += 1;
  }

  isFull(): boolean {
    return this.bookedSeats >= this.capacity;
  }

  abstract calculateBaggageFee(weightKg: number, usdToVndRate?: number): number;
  abstract getTypeLabel(): string;
}

class DomesticFlight extends Flight {
  public constructor(
    flightNumber: string,
    origin: string,
    destination: string,
    departureTime: Date,
    capacity: number,
    baseFareVND: number
  ) {
    super(flightNumber, origin, destination, departureTime, capacity, baseFareVND);
  }

  calculateBaggageFee(weightKg: number): number {
    const feePerKg = 50000;
    return Math.max(0, weightKg) * feePerKg;
  }

  getTypeLabel(): string {
    return "Nội địa";
  }
}

class InternationalFlight extends Flight {
  public constructor(
    flightNumber: string,
    origin: string,
    destination: string,
    departureTime: Date,
    capacity: number,
    baseFareVND: number
  ) {
    super(flightNumber, origin, destination, departureTime, capacity, baseFareVND);
  }

  calculateBaggageFee(weightKg: number, usdToVndRate: number = VND_PER_USD_DEFAULT): number {
    const feePerKgUSD = 10;
    return Math.max(0, weightKg) * feePerKgUSD * usdToVndRate;
  }

  getTypeLabel(): string {
    return "Quốc tế";
  }
}

class Booking {
  public readonly bookingId: number;
  public readonly passenger: Passenger;
  public readonly flight: Flight;
  public readonly numberOfTickets: number;
  public readonly baggagePerTicketKg: number;
  public readonly totalCost: number;

  constructor(
    bookingId: number,
    passenger: Passenger,
    flight: Flight,
    numberOfTickets: number,
    baggagePerTicketKg: number,
    totalCost: number
  ) {
    this.bookingId = bookingId;
    this.passenger = passenger;
    this.flight = flight;
    this.numberOfTickets = numberOfTickets;
    this.baggagePerTicketKg = baggagePerTicketKg;
    this.totalCost = totalCost;
  }

  getBookingDetails(): string {
    const dt = this.flight.departureTime.toLocaleString();
    return `Booking #${this.bookingId} | PAX: ${this.passenger.name} (#${this.passenger.passengerId}) | ` +
      `Flight: ${this.flight.flightNumber} (${this.flight.origin} → ${this.flight.destination}, ${dt}) | ` +
      `Vé: ${this.numberOfTickets} | HL: ${this.baggagePerTicketKg}kg/ve | Tổng: ${this.totalCost.toLocaleString()} VND`;
  }
}

class GenericRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  findIndex(predicate: (item: T) => boolean): number {
    return this.items.findIndex(predicate);
  }

  remove(predicate: (item: T) => boolean): void {
    const toRemoveIdxs: number[] = this.items
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => predicate(item))
      .map(({ idx }) => idx);

    toRemoveIdxs.sort((a, b) => b - a).forEach((idx) => this.items.splice(idx, 1));
  }
}

class AirlineManager {
  private flightRepo = new GenericRepository<Flight>();
  private passengerRepo = new GenericRepository<Passenger>();
  private bookingRepo = new GenericRepository<Booking>();

  private nextPassengerId = 1;
  private nextBookingId = 1;
  private usdToVndRate = VND_PER_USD_DEFAULT;

  setUsdToVndRate(rate: number) {
    if (rate > 0) this.usdToVndRate = rate;
  }

  addPassenger(name: string, passportNumber: string): Passenger {
    const pax = new Passenger(this.nextPassengerId++, name, passportNumber);
    this.passengerRepo.add(pax);
    return pax;
  }

  addFlight(flight: Flight): void {
    const existed = this.flightRepo.find(f => f.flightNumber === flight.flightNumber);
    if (existed) throw new Error(`Đã tồn tại chuyến bay ${flight.flightNumber}`);
    this.flightRepo.add(flight);
  }

  updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
    const f = this.flightRepo.find(fl => fl.flightNumber === flightNumber);
    if (!f) throw new Error("Không tìm thấy chuyến bay");
    f.departureTime = newDepartureTime;
  }

  listAvailableFlights(origin: string, destination: string): Flight[] {
    return this.flightRepo
      .getAll()
      .filter(f =>
        f.origin.toLowerCase() === origin.toLowerCase() &&
        f.destination.toLowerCase() === destination.toLowerCase() &&
        !f.isFull()
      );
  }

  countFlightsByType(): { domestic: number; international: number } {
    return this.flightRepo.getAll().reduce(
      (acc, f) => {
        if (f instanceof DomesticFlight) acc.domestic += 1;
        else if (f instanceof InternationalFlight) acc.international += 1;
        return acc;
      },
      { domestic: 0, international: 0 }
    );
  }

  createBooking(
    passengerId: number,
    flightNumber: string,
    numberOfTickets: number,
    baggagePerTicketKg: number
  ): Booking {
    if (numberOfTickets <= 0) throw new Error("Số lượng vé phải > 0");

    const pax = this.passengerRepo.find(p => p.passengerId === passengerId);
    if (!pax) throw new Error("Không tìm thấy hành khách");

    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
    if (!flight) throw new Error("Không tìm thấy chuyến bay");

    if (flight.bookedSeats + numberOfTickets > flight.capacity) {
      throw new Error("Không đủ chỗ trống cho số vé yêu cầu");
    }

    const baggageFeePerTicketVND =
      flight instanceof InternationalFlight
        ? flight.calculateBaggageFee(baggagePerTicketKg, this.usdToVndRate)
        : flight.calculateBaggageFee(baggagePerTicketKg);

    const pricePerTicketVND = flight.baseFareVND + baggageFeePerTicketVND;
    const totalCost = pricePerTicketVND * numberOfTickets;

    for (let i = 0; i < numberOfTickets; i++) flight.bookSeat();

    const booking = new Booking(
      this.nextBookingId++,
      pax,
      flight,
      numberOfTickets,
      baggagePerTicketKg,
      totalCost
    );
    this.bookingRepo.add(booking);
    return booking;
  }

  cancelBooking(bookingId: number): void {
    const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
    if (!booking) throw new Error("Không tìm thấy booking");
    booking.flight.bookedSeats = Math.max(0, booking.flight.bookedSeats - booking.numberOfTickets);
    this.bookingRepo.remove(b => (b as Booking).bookingId === bookingId);
  }

  listBookingsByPassenger(passengerId: number): Booking[] {
    return this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
  }

  calculateTotalRevenue(): number {
    return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
  }

  getFlightPassengerList(flightNumber: string): { passenger: Passenger; tickets: number }[] {
    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
    if (!flight) throw new Error("Không tìm thấy chuyến bay");

    const bookingsOfFlight = this.bookingRepo.getAll().filter(b => b.flight.flightNumber === flightNumber);

    const aggregated = bookingsOfFlight.reduce<Record<number, { passenger: Passenger; tickets: number }>>(
      (acc, b) => {
        const id = b.passenger.passengerId;
        if (!acc[id]) acc[id] = { passenger: b.passenger, tickets: 0 };
        acc[id].tickets += b.numberOfTickets;
        return acc;
      },
      {}
    );

    return Object.values(aggregated);
  }

  getAllFlights(): Flight[] { return this.flightRepo.getAll(); }
  getAllPassengers(): Passenger[] { return this.passengerRepo.getAll(); }
  getAllBookings(): Booking[] { return this.bookingRepo.getAll(); }
}

async function main() {
  const manager = new AirlineManager();

  // dữ liệu mẫu
  manager.addPassenger("Nguyen Van A", "P1234567");
  manager.addPassenger("Tran Thi B", "P7654321");

  manager.addFlight(new DomesticFlight("VN123", "Hanoi", "Danang", new Date("2025-09-10T09:00:00"), 5, 1_200_000));
  manager.addFlight(new DomesticFlight("VN456", "Hanoi", "Ho Chi Minh", new Date("2025-09-11T14:30:00"), 3, 1_500_000));
  manager.addFlight(new InternationalFlight("VN789", "Ho Chi Minh", "Singapore", new Date("2025-10-01T08:00:00"), 4, 3_000_000));

  while (true) {
    console.log("\n===== MENU QUẢN LÝ HÃNG HÀNG KHÔNG =====");
    console.log("1. Thêm hành khách mới");
    console.log("2. Thêm chuyến bay mới (nội địa/quốc tế)");
    console.log("3. Tạo giao dịch đặt vé");
    console.log("4. Hủy giao dịch đặt vé");
    console.log("5. Hiển thị chuyến bay còn trống theo điểm đi/đến");
    console.log("6. Hiển thị danh sách vé đã đặt của một hành khách");
    console.log("7. Tính tổng doanh thu của hãng");
    console.log("8. Đếm số lượng chuyến bay nội địa/quốc tế");
    console.log("9. Cập nhật giờ bay");
    console.log("10. Xem danh sách hành khách của một chuyến bay");
    console.log("11. Xem toàn bộ flights/passengers/bookings");
    console.log("0. Thoát");

    const choice = await prompt("Chọn chức năng: ");

    try {
      switch (choice) {
        case "1": {
          const name = await prompt("Tên hành khách: ");
          const passport = await prompt("Số hộ chiếu: ");
          const pax = manager.addPassenger(name, passport);
          console.log("Đã thêm:", pax.getDetails());
          break;
        }
        case "2": {
          const type = (await prompt("Loại (D = Nội địa, I = Quốc tế): ")).toUpperCase();
          const flightNumber = await prompt("Số hiệu (duy nhất): ");
          const origin = await prompt("Nơi đi: ");
          const destination = await prompt("Nơi đến: ");
          const departure = await prompt("Thời gian khởi hành (YYYY-MM-DD HH:mm): ");
          const capacity = parseInt(await prompt("Sức chứa: "));
          const baseFare = parseInt(await prompt("Giá vé cơ bản (VND): "));
          const departureTime = new Date(departure.replace(" ", "T") + ":00");

          let f: Flight;
          if (type === "D") {
            f = new DomesticFlight(flightNumber, origin, destination, departureTime, capacity, baseFare);
          } else if (type === "I") {
            f = new InternationalFlight(flightNumber, origin, destination, departureTime, capacity, baseFare);
          } else {
            console.log("Loại không hợp lệ!");
            break;
          }
          manager.addFlight(f);
          console.log("Đã thêm chuyến bay:", f.flightNumber, "-", f.getTypeLabel());
          break;
        }
        case "3": {
          const pid = parseInt(await prompt("ID hành khách: "));
          const fno = await prompt("Số hiệu chuyến bay: ");
          const tickets = parseInt(await prompt("Số lượng vé: "));
          const baggage = parseFloat(await prompt("Hành lý (kg)/vé: "));
          const booking = manager.createBooking(pid, fno, tickets, baggage);
          console.log("Đặt vé thành công!");
          console.log(booking.getBookingDetails());
          break;
        }
        case "4": {
          const bid = parseInt(await prompt("Mã Booking cần hủy: "));
          manager.cancelBooking(bid);
          console.log("Đã hủy booking #" + bid);
          break;
        }
        case "5": {
          const o = await prompt("Điểm đi: ");
          const d = await prompt("Điểm đến: ");
          const list = manager.listAvailableFlights(o, d);
          if (list.length === 0) {
            console.log("Không có chuyến nào còn chỗ.");
          } else {
            list.forEach(f =>
              console.log(
                `${f.flightNumber} | ${f.getTypeLabel()} | ${f.origin} → ${f.destination} | ` +
                `${f.departureTime.toLocaleString()} | ${f.bookedSeats}/${f.capacity} | ` +
                `Base fare: ${f.baseFareVND.toLocaleString()} VND`
              )
            );
          }
          break;
        }
        case "6": {
          const pid = parseInt(await prompt("ID hành khách: "));
          const bookings = manager.listBookingsByPassenger(pid);
          if (bookings.length === 0) console.log("Chưa có vé nào.");
          else bookings.forEach(b => console.log(b.getBookingDetails()));
          break;
        }
        case "7": {
          const rev = manager.calculateTotalRevenue();
          console.log("Tổng doanh thu:", rev.toLocaleString(), "VND");
          break;
        }
        case "8": {
          const c = manager.countFlightsByType();
          console.log(`Nội địa: ${c.domestic} | Quốc tế: ${c.international}`);
          break;
        }
        case "9": {
          const fno = await prompt("Số hiệu chuyến bay: ");
          const departure = await prompt("Giờ bay mới (YYYY-MM-DD HH:mm): ");
          const dt = new Date(departure.replace(" ", "T") + ":00");
          manager.updateFlightTime(fno, dt);
          console.log("Đã cập nhật giờ bay.");
          break;
        }
        case "10": {
          const fno = await prompt("Số hiệu chuyến bay: ");
          const paxList = manager.getFlightPassengerList(fno);
          if (paxList.length === 0) console.log("Chưa có hành khách nào.");
          else paxList.forEach(x => console.log(`- ${x.passenger.getDetails()} | Vé: ${x.tickets}`));
          break;
        }
        case "11": {
          console.log("\n--- Flights ---");
          manager.getAllFlights().forEach(f => {
            console.log(
              `${f.flightNumber} | ${f.getTypeLabel()} | ${f.origin} → ${f.destination} | ` +
              `${f.departureTime.toLocaleString()} | ${f.bookedSeats}/${f.capacity} | ` +
              `Base fare: ${f.baseFareVND.toLocaleString()} VND`
            );
          });
          console.log("\n--- Passengers ---");
          manager.getAllPassengers().forEach(p => console.log(p.getDetails()));
          console.log("\n--- Bookings ---");
          manager.getAllBookings().forEach(b => console.log(b.getBookingDetails()));
          break;
        }
        case "0": {
          console.log("Tạm biệt!");
          process.exit(0);
        }
        default:
          console.log("Lựa chọn không hợp lệ!");
      }
    } catch (err: any) {
      console.error("Lỗi:", err?.message ?? err);
    }
  }
}

main().catch(e => console.error(e));
