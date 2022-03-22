const uniqid = require("uniqid");
const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());

const employee = [
  {
    id: 1,
    full_name: "rajib tolol",
    occupation: "satpam",
    gender: "male",
  },
  {
    id: 2,
    full_name: "gipen",
    occupation: "programmer",
    gender: "male",
  },
  {
    id: 3,
    full_name: "rachel",
    occupation: "designer",
    gender: "female",
  },
  {
    id: 4,
    full_name: "harmony",
    occupation: "programmer",
    gender: "female",
  },
  {
    id: 5,
    full_name: "killua",
    occupation: "designer",
    gender: "male",
  },
];

// GET EMPLOYEE
app.get("/employee", (req, res) => {
  // const userOccupation = req.query.occupation

  if (employee.length) {
    res.status(200).json({
      message: "Employee fetched successfully",
      result: employee,
    });
  } else {
    res.status(400).send("Employee not found");
  }

  // PENGEN BIKIN GET EMPLOYEE BY OCCUPATION

  // if (employee.length && employee.occupation === userOccupation) {
  //     res.status(200).json({
  //         message: `Employee with occupation ${userOccupation} has been fetched successfully`,
  //         result: filteredEmployee
  //     })
  // } else if (employee.length && employee.occupation !== userOccupation){
  //     res.status(400).json({
  //         message: `Employee with occupation ${userOccupation} not found`
  //     })
  // }
});

// GET EMPLOYEE WITH ID
app.get("/employee/:id", (req, res) => {
  const userId = req.params.id;
  const findIndex = employee.findIndex((val) => {
    return val.id == userId;
  });
  if (findIndex == -1) {
    res.status(400).json({
      message: `Employee with id number ${userId} not found`,
    });
  } else  {
    res.status(200).json({
      message: `Employee with id number ${userId} has been fetched successfully`,
      result: employee[findIndex],
    });
  }
});

// TAMBAH EMPLOYEE
app.post("/employee", (req, res) => {
  const data = req.body;

  if (!data.username) {
    res.status(400).json({
      message: `Can not accept the data, please retry!`,
    });
    return;
  }
  const newEmployee = {
    ...data,
    id: uniqid.time(),
  };
  employee.push(newEmployee);

  res.status(200).json({
    message: `user added!`,
  });
});

// DELETE EMPLOYEE
app.delete("/employee/:id", (req, res) => {
  const userId = req.params.id;
  const findIndex = employee.findIndex((val) => {
    return (val.id = userId);
  });
  if (findIndex == -1) {
    res.status(400).json({
      message: `User with ID ${userId} not found`,
    });
    return;
  }
  employee.splice(findIndex, 1);

  res.status(200).json({
    message: "User deleted",
  });
});

// EDIT EMPLOYEE
app.patch("/employee/:id", (req, res) => {
  const userId = req.params.id;
  const data = req.body;
  const findIndex = employee.findIndex((val) => {
    return (val.id = userId);
  });
  if (findIndex == -1) {
    res.status(400).json({
      message: `User with ID ${userId} not found`,
    });
    return;
  }
  employee[findIndex] = {
    ...employee[findIndex],
    ...data,
  };
});

app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});
