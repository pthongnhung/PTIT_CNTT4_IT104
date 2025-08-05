const typeConsole = (type = "log") => {
    console[type](`Day la type ${type}`);
}

typeConsole("warn");
typeConsole("error");
typeConsole();
typeConsole("log");