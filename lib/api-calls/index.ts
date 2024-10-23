const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchAPI(input: RequestInfo, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const newOptions = {
    ...options,
    headers,
  };
  const res = await fetch(BASE_URL + input, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
    //
    //
  } else {
    throw {
      success: false,
      message: "Ocurrio un error en fetchAPI",
    };
  }
}

export async function auth(email: string) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  };

  const data = await fetchAPI("/auth", options);
  return data;
}

export async function authToken(email: string, code: string) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
      code,
    }),
  };

  const data = await fetchAPI("/auth/token", options);

  if (data.success) {
    localStorage.setItem("token", data.token);
  }
  return data;
}

export async function updateUser(collection) {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      name: collection.name,
      // email: collection.email,
      surname: collection.surname,
      phone: {
        area_code: "+54",
        number: collection.numberPhone,
      },
      identification: {
        number: "12345",
      },
      address: {
        codigo_postal: collection.codePostal,
        calle: collection.calle,
        nro_calle: collection.nroCalle,
      },
    }),
  };
  const data = await fetchAPI("/me/update", options);
  return data;
}

export async function createPreference(idProduct) {
  const options = {
    method: "POST",
  };
  const data = await fetchAPI(`/order?productId=${idProduct}`, options);
  return data;
}

export async function createOrdersPreference(productIds) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      productIds,
    }),
  };
  const data = await fetchAPI(`/order/products`, options);
  return data;
}
