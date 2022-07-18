// Title: WhatABook Part 2
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 16 2022
// Description: Book that uses fetch to grab data
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
//https://www.stat.auckland.ac.nz/~paul/ItDT/HTML/node46.html#:~:text=The%20main%20content%20of%20an,the%20form%20.

//export class to detres-whatabook2.html
export class HttpClient {
  // 2 parameters , one fetch url and params if needed
  async get(url, params = "") {
    //new URL object
    url = new URL(url);
    /* create New url params and set url search property to these params */
    url.search = new URLSearchParams(params);

    //store response/ serialize url
    const res = await fetch(url.toString(), {
      method: "GET",
    });

    return res.json();
  }
}
