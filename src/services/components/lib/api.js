const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // console.error(json.errors);
    throw new Error(json.errors.message);
  }
  return json.data;
}

export function getBraintreeClientToken() {
  return fetch("/api/payment/generateToken", {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
}

export function processPayment(paymentData) {
  return fetch(`/api/payment/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paymentData)
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
}

export function createOrder(userId, token, createOrderData) {
  return fetch(process.env.REACT_APP_API_URL + `/order/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ order: createOrderData })
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
}
