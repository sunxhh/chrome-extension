class DB {
  constructor(config) {
    this.config = Object.assign({}, {
      name: 'bookmark',
      keyPath: 'url',
      upgradeneeded: function(db, name, keyPath) {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: keyPath });
        }
      },
      success: function() {

      }
    }, config);
  }
  db = null;
  init() {
    let request = window.indexedDB.open(this.config.name);
    return new Promise((resolve, reject) => {
      request.onerror = (e) => {
        console.error(e.currentTarget.error.message);
      };

      request.onsuccess = (e) => {
        console.log("open success");
        this.db = e.target.result;
        resolve(this);
      };

      request.onupgradeneeded = (e) => {
        console.error("db upgradeneeded");
        let db = e.target.result;
        this.config.upgradeneeded(db, this.config.name, this.config.keyPath);
      };
    })

  }
  getStore(storeName) {
    let db = this.db;
    let transaction = db.transaction(storeName, 'readwrite');
    let store = transaction.objectStore(storeName);

    return store;
  }

  getDataByKey(storeName, value) {
    let store = this.getStore(storeName);
    let request = store.get(value);
    return new Promise((resolve, reject) => {
      request.onsuccess = (e) => {
        let result = e.target.result;
        resolve({ result, store });
      };
    });
  }

  closeDB() {
    this.db && this.db.close();
  }
  static deleteDB(name) {
    indexedDB.deleteDatabase(name);
  }

}

export default DB;
