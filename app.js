const corrAns = ["B", "B", "B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAns = [form.q1.value, form.q2.value, form.q3.form];

  userAns.forEach((ans, index) => {
    if (ans == corrAns[index]) {
      score += 10;
    }
  });

  console.log(score);
});
