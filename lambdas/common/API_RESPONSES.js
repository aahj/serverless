class ApiResponses {
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
  };

  _200(data = {}) {
    return {
      headers: ApiResponses.headers,
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }

  _400(data = {}) {
    return {
      headers: ApiResponses.headers,
      statusCode: 400,
      body: JSON.stringify(data),
    };
  }

  _404(data = {}) {
    return {
      headers: ApiResponses.headers,
      statusCode: 404,
      body: JSON.stringify(data),
    };
  }
}

module.exports = new ApiResponses();
