(() => {
  var t = [
    [
      "9B9B97",
      "A9A081",
      "B8A46C",
      "C6A956",
      "D4AE41",
      "E2B32B",
      "F1B716",
      "FFBC00",
    ],
    [
      "FF9CB6",
      "FFA19C",
      "FFA582",
      "FFAA68",
      "FFAE4E",
      "FFB334",
      "FFB71A",
      "FFBC00",
    ],
    [
      "ff9cb6",
      "f19cb2",
      "e29cad",
      "d49ca9",
      "c69ba4",
      "b89ba0",
      "a99b9b",
      "9b9b97",
    ],
    [
      "c3a7f9",
      "bda5eb",
      "b8a4dd",
      "b2a2cf",
      "aca0c1",
      "a69eb3",
      "a19da5",
      "9b9b97",
    ],
    [
      "c3a7f9",
      "ccaad5",
      "d4adb2",
      "ddb08e",
      "e5b36b",
      "eeb647",
      "f6b924",
      "ffbc00",
    ],
    [
      "74cae8",
      "88c8c7",
      "9cc6a6",
      "b0c485",
      "c3c263",
      "d7c042",
      "ebbe21",
      "ffbc00",
    ],
    [
      "74cae8",
      "7ac3dc",
      "7fbdd1",
      "85b6c5",
      "8aafba",
      "90a8ae",
      "95a2a3",
      "9b9b97",
    ],
    [
      "a7dd8c",
      "a5d48e",
      "a4ca8f",
      "a2c191",
      "a0b792",
      "9eae94",
      "9da495",
      "9b9b97",
    ],
    [
      "a7dd8c",
      "b4d878",
      "c0d464",
      "cdcf50",
      "d9ca3c",
      "e6c528",
      "f2c114",
      "ffbc00",
    ],
  ];
  window.followMouse = function () {
    return {
      lastDistanceFromOrigin: 0,
      opacityRatio: 0,
      topOpacity: 0,
      topOpacityIsIncreasing: !0,
      currentGradientIndex: 0,
      bottomColors: t[0],
      topColors: t[1],
      init: function () {
        this.gradient_count = t.length;
      },
      handleMousemove: function (t) {
        var a = Math.round(
          Math.sqrt(Math.pow(t.clientX, 2) + Math.pow(t.clientY, 2)),
        );
        a != this.lastDistanceFromOrigin &&
          (this.lastDistanceFromOrigin &&
            this.updateOpacity(Math.abs(this.lastDistanceFromOrigin - a)),
          (this.lastDistanceFromOrigin = a));
      },
      handleMouseout: function (t) {
        this.lastDistanceFromOrigin = 0;
      },
      updateOpacity: function (t) {
        (this.opacityRatio += t / 8 / 100),
          this.opacityRatio > 1 && this.advanceToNextGradient(),
          (this.topOpacity = this.topOpacityIsIncreasing
            ? this.opacityRatio
            : 1 - this.opacityRatio);
      },
      advanceToNextGradient: function () {
        (this.opacityRatio = 0),
          (this.currentGradientIndex =
            (this.currentGradientIndex + 1) % this.gradient_count),
          (this.topOpacityIsIncreasing = !this.topOpacityIsIncreasing);
        var a = (this.currentGradientIndex + 1) % this.gradient_count;
        this.topOpacityIsIncreasing
          ? (this.topColors = t[a])
          : (this.bottomColors = t[a]);
      },
    };
  };
})();
