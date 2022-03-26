@ECHO EJECUTANDO APLICACION MOVIE APP
COLOR 10
CD "frontend\project"
START PowerShell.exe -Command "npm i"
START PowerShell.exe -Command "npm run dev"
CD ..
CD ..
CD "backend"
START PowerShell.exe -Command "npm i"
START PowerShell.exe -Command "nodemon app.js"
START http://localhost:3000/

@ECHO PRESIONA UNA TECLA PARA SALIR
pause
