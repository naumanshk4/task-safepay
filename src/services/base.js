import axios from "axios";

export function getData(config, callback, errorcallback) {
  axios
    .get("http://localhost:5000/students", config)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
        //  console.log(res)
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function addStudent(data,config, callback, errorcallback) {
  axios
    .post("http://localhost:5000/student",data, config)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
        //  console.log(res)
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}


export function editStudent(data,config, callback, errorcallback) {
  // console.log(data,"from edit")
  axios
    .put("http://localhost:5000/student/"+data.uuid,data, config)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
        //  console.log(res)
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function deleteStudent(data,config, callback, errorcallback) {
  // console.log(data,"from edit")
  axios
    .delete("http://localhost:5000/student/"+data.uuid,data, config)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
        //  console.log(res)
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export function lookupStudent(data,config, callback, errorcallback) {
  // console.log(data,"from edit")
  axios
    .get("http://localhost:5000/student/"+data.uuid,data, config)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
        //  console.log(res)
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}