(() => {
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const resultWrap = document.getElementById("resultWrap");
  const resultText = document.getElementById("resultText");

  const q1Inputs = Array.from(document.querySelectorAll('input[name="q1_director"]'));
  const q2Inputs = Array.from(document.querySelectorAll('input[name="q2_songs"]'));

  const correctQ1 = "nolan";
  const correctQ2 = ["hooked", "come"];

  function resetQuiz() {
    for (const input of q1Inputs) input.checked = false;
    for (const input of q2Inputs) input.checked = false;
    resultWrap.classList.add("d-none");
    resultText.textContent = "";
  }

  function getQ1() {
    const choice = q1Inputs.find((i) => i.checked);
    return choice ? choice.value : "";
  }

  function getQ2() {
    return q2Inputs.filter((i) => i.checked).map((i) => i.value);
  }

  function scoreQuiz() {
    const q1 = getQ1();
    const q2 = getQ2();

    if (!q1) return "Pick an answer for Question 1.";
    if (!q2.length) return "Pick songs for Question 2.";

    const q1Ok = q1 === correctQ1;
    const q2Ok =
      q2.length === correctQ2.length && q2.every((song) => correctQ2.includes(song));

    if (q1Ok && q2Ok) return "Score: 2/2. Perfect!";
    if (q1Ok || q2Ok) return "Score: 1/2. Nice try.";
    return "Score: 0/2. Try again.";
  }

  submitBtn.addEventListener("click", () => {
    resultText.textContent = scoreQuiz();
    resultWrap.classList.remove("d-none");
  });

  resetBtn.addEventListener("click", resetQuiz);
  resetQuiz();
})();

