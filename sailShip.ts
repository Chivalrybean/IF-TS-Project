//"Welcome to this project - Placeholder text so file won't be empty and not upload.";

class room {
  name: string;
  background: string;
  inventory: Array<object>;
  exits: Array<string>;
  active: boolean;
    constructor(name: string, background: string, inventory: Array<object>, exits: Array<string>) {
      this.name = name;
      this.background = background;
      this.inventory = inventory;
      this.exits = exits;
      this.active = false;
  }
}


class person {
  name: string;
  inventory: Array<object>;
  statuses: Array<string>;
    constructor(name: string, inventory: Array<object>, statuses: Array<string>) {
      this.name = name;
      this.inventory = inventory;
      this.statuses = statuses;
  }

}

class thingy {
  name: string;
    constructor(name: string) {
      this.name = name;
    }
}

class trinket extends thingy{
  description: string;
  constructor(name: string, description: string) {
    super(name);
    this.description = description;
    }

}

class device extends thingy{
  description: string;
  action: string;
  constructor(name: string, description: string, action: string) {
    super(name);
    this.description = description;
    this.action = action;
    }

}