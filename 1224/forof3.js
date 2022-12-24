/**
 * 1224 - 반복문
 */

// const container = document.getElementById("container");
// container.innerHTML = "aaa";

window.addEventListener("load", () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write("*");
    }
    document.write("<br />");
  }

  document.write("<br />", "========================", "<br /><br />");

  for (let i = 0; i < 5; i++) {
    // i = 0;
    // i = 1;
    // i = 2;
    // i = 3;
    // i = 4;
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br />");
  }

  document.write("<br />========================<br /><br />");

  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("&nbsp;");
    }
    for (let j = 5; j > i; j--) {
      document.write("*");
    }
    document.write("<br />");
  }

  document.write("<br />========================<br /><br />");

  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write("&nbsp;");
    }
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br />");
  }

  document.write("<br />========================<br /><br />");

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write("&nbsp;");
    }
    for (let j = 5; j > i; j--) {
      document.write("*");
    }
    for (let j = 4; j > i; j--) {
      document.write("*");
    }
    document.write("<br />");
  }

  document.write("<br />========================<br /><br />");

  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write("&nbsp;");
    }
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br />");
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
      document.write("&nbsp;");
    }
    for (let j = 4; j > i; j--) {
      document.write("*");
    }
    for (let j = 3; j > i; j--) {
      document.write("*");
    }
    document.write("<br />");
  }
});
