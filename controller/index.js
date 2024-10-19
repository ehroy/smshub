import expressAsyncHandler from "express-async-handler";
const getBalance = expressAsyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("please add field");
  }
  const authHeader = req.headers["authorization"];
  const apikey = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!apikey) return res.status(401).json(new Error("no auth provide"));
  try {
    const apiUrl = `https://smshub.org/stubs/handler_api.php?api_key=${apikey}&action=getBalance`;
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Periksa jika response dari API eksternal berhasil
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const respone = await response.text();
    console.log(respone);
    const data = {
      status: true,
      message: {
        balance: respone.split(":")[1],
        action: respone.split(":")[0],
      },
    };
    res.status(200).json(data);
  } catch (error) {
    throw new Error("error fetching data from api");
  }
});
const listFound = expressAsyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("please add field");
  }
  const authHeader = req.headers["authorization"];
  const apikey = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!apikey) return res.status(401).json(new Error("no auth provide"));
  try {
    const {  country } = req.body;
    const apiUrl = `https://smshub.org/stubs/handler_api.php?api_key=${apikey}&action=getNumbersStatus&country=${country}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Periksa jika response dari API eksternal berhasil
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const respone = await response.text();
    console.log(respone)
    const data = {
      status: true,
      message: {
        id: respone.split(":")[1],
        number: respone.split(":")[2],
        action: respone.split(":")[0],
      },
    };
    res.status(200).json(data);
  } catch (error) {
    throw new Error("error fetching data from api");
  }
});
const orderNumber = expressAsyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("please add field");
  }
  const authHeader = req.headers["authorization"];
  const apikey = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!apikey) return res.status(401).json(new Error("no auth provide"));
  try {
    const {  country, operator, service } = req.body;
    const apiUrl = `https://smshub.org/stubs/handler_api.php?api_key=${apikey}&action=getNumber&service=${service}&operator=${operator}&country=${country}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Periksa jika response dari API eksternal berhasil
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const respone = await response.text();

    const data = {
      status: true,
      message: {
        id: respone.split(":")[1],
        number: respone.split(":")[2],
        action: respone.split(":")[0],
      },
    };
    res.status(200).json(data);
  } catch (error) {
    throw new Error("error fetching data from api");
  }
});

const actionNumber = expressAsyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("please add field");
  }
  const authHeader = req.headers["authorization"];
  const apikey = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!apikey) return res.status(401).json(new Error("no auth provide"));
  try {
    const {  status, id } = req.body;
    const apiUrl = `https://smshub.org/stubs/handler_api.php?api_key=${apikey}&action=setStatus&status=${status}&id=${id}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Periksa jika response dari API eksternal berhasil
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const respone = await response.text();
    if(respone === 'BAD_STATUS'){
      const data = {
        status: false,
        message: respone,
      };
      res.status(403).json(data);
    }else{
      const data = {
        status: true,
        message: {
          id: id,
          number: status,
          action: respone,
        },
      };
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error("error fetching data from api");
  }
});

const actionNumber = expressAsyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("please add field");
  }
  const authHeader = req.headers["authorization"];
  const apikey = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!apikey) return res.status(401).json(new Error("no auth provide"));
  try {
    const {  status, id } = req.body;
    const apiUrl = `https://smshub.org/stubs/handler_api.php?api_key=${apikey}&action=setStatus&status=${status}&id=${id}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Periksa jika response dari API eksternal berhasil
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const respone = await response.text();
    if(respone === 'BAD_STATUS'){
      const data = {
        status: false,
        message: respone,
      };
      res.status(403).json(data);
    }else{
      const data = {
        status: true,
        message: {
          id: id,
          number: status,
          action: respone,
        },
      };
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error("error fetching data from api");
  }
});

export { orderNumber, getBalance,listFound,actionNumber };
