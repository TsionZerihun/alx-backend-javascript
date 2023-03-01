export default function getFullResponseFromAPI(success) {
  const p = new Promise((reslove, reject) => {
    if (success) {
      reslove({
        status: 200,
        body: 'Success',
      });
    } else reject(new Error('The fake API is not working currently'));
  });
  return p;
}
