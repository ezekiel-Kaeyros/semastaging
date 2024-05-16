'use server';

import { revalidatePath } from 'next/cache';
type BulkMessage= {
    recipients_phone_numbers: string[];
    template_name: string;
}
type TypeResponseBulkMsg = {

};
export const postBulkMessage = async (bulkMessage: BulkMessage) => {
  'use server';
  let response

  try {
    await fetch(
      'https://7ws8gmoso5.execute-api.eu-central-1.amazonaws.com/prod/broadcast/100609346426084',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bulkMessage),
      }
    ).then((result) => {
      console.log('post succeeded', result);
      response = result.json();
      return result.json();
    }).catch((error) => {
        console.log('fail', error);
        
    });
  } catch (error) {
    console.log('There was and error creating the template', error);
  }

  revalidatePath('/dashboard/bulk-messages');
  return response;
};
