//"Welcome to this project - Placeholder text so file won't be empty and not upload.";

class room {
  name: string;
  constructor(roomName: string, background: string) {
    this.name = roomName;
  }
}

class inventory {
  inv: Array<object>;
  constructor(addItems: Array<object>) {
    this.inv = addItems;
  }
}