class Api {

    constructor() {
        this.apiUrl = "http://localhost:3005/meetings"
    }

    getMeetings() {
        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          };
          return this._fetch(options);

    }

    saveMeeting(dataOfMeeting) {
      const options = {
        method: "POST",
        body: JSON.stringify(dataOfMeeting),
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this._fetch(options);
    }


    
    _fetch(options, path = "") {
        return fetch(this.apiUrl + path, options)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network error!");
          })
          .catch((err) => {
            console.log("Error in _fetch: ", err);
          });
      }
}


export default Api;