export const fetchPromise = <T>(url: string, options: RequestInit) =>
  new Promise<T>((resolve, reject) => {
    fetch(url, options)
      .then((res: Response) => {
        if (res.ok) {
          res.json().then(json => resolve(json as T));
        } else {
          reject(
            `Http request failed with status code ${res.status} - ${res.statusText}!`
          );
        }
      })
      .catch(err => reject(err));
  });
