import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <h1>About Pomodoro</h1>
          <p>
            The Pomodoro Technique is a time management method that uses a timer
            to divide work into intervals, separated by short breaks. The goal
            is to maintain total focus for a short period and ensure breaks to
            avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> that you want to work on .
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short break of 5 minutes</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But in <strong>Chronos Pomodoro</strong> there is a differential 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time Customization</h3>
          <p>
            You can configure the focus time, short break, and long break
            however you want! Just go to the{" "}
            <a href="/settings">settings page</a> and adjust the minutes as you
            prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            After each completed cycle, a new task is automatically added to
            your history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our standard:</strong>
          </p>
          <ul>
            <li>Odd cycles: Work (focus).</li>
            <li>Even cycles: Short break.</li>
            <li>
              Cycle <strong>8</strong>: Long special break, to reset the
              complete cycle.
            </li>
          </ul>

          <h3>🍅 Cycle Visualization</h3>
          <p>
            Right below the timer, you will see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work (focus) cycle.</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know where you are in the process and what
            comes next. You no longer need to jot things down on paper or do
            mental calculations!
          </p>

          <h3>📊 Automatic History</h3>
          <p>
            All your completed tasks and cycles are saved in the{" "}
            <a href="/history">history</a>, with status of completed or
            interrupted. This way, you can track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest just the right amount.</li>
            <li>✅ Customize your own cycles and times.</li>
            <li>✅ Automatically track your history.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's go back to the{" "}
            <a href="/">home page</a> and start your Pomodoros! Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
