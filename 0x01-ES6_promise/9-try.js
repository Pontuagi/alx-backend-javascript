export default function guardrail(mathFunction) {
  const queue = []; // Initialize an empty array to store results or errors

  try {
    queue.push(mathFunction()); // Try executing mathFunction and push its result into the queue
  } catch (error) {
    queue.push(String(error)); // If an error occurs, convert it to a string and push into the queue
  } finally {
    queue.push('Guardrail was processed'); // Add a message to indicate the guardrail processing
  }
  // Return the populated queue containing results or errors and the processing message
  return queue;
}
