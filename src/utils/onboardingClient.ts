'use server';
// import axios from 'axios';

export const registered = async (data: any) => {
  'use server';
  //   const data =
  console.log(data);

  try {
    const response = await fetch(
      `https://nh9dzfa8o7.execute-api.eu-central-1.amazonaws.com/prod/whatsapp-access`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      console.log('response', response);

      return response.status;
    } else {
      console.log('responseError', response);
      return response.status;
    }
  } catch (error) {
    console.log('error', error);
    return error;

    // return error;
  }
};
