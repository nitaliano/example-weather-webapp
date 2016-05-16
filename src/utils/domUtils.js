const domUtils = {
  getData: function (node, key) {
    let value = null;

    if (!node) {
      return value;
    }

    if (node.dataset && node.dataset[key]) {
      value = node.dataset[key];
    }

    return value;
  }
};

export default domUtils;
