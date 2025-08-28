import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimeWorkerManager | null = null;
export class TimeWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url), {
      type: "module",
    });
  }

  static getInstance(): TimeWorkerManager {
    if (!instance) {
      instance = new TimeWorkerManager();
    }
    return instance;
  }

  postmessage(message: TaskStateModel) {
    if (!this.worker) {
      throw new Error("Worker is not initialized");
    }
    this.worker.postMessage(message);
  }

  onmessage(callback: (event: MessageEvent) => void) {
    if (!this.worker) {
      throw new Error("Worker is not initialized");
    }
    this.worker.onmessage = callback;
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
      instance = null; // Reset the singleton instance
    }
  }
}
