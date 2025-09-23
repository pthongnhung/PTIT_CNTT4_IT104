export type Data = {
    value:number
}
export type Student = {
    id: number,
    name:string
}
export type InitialStudentState = {
    students:Student[]
}
export type InitialIntList = {
    value:number[]
}
export type ThemeState = {
    mode: "light" | "dark"
}