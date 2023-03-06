export default function guardrail(mathFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    const x = mathFunction();
    queue.push(x);
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push(message);
  }
  return queue;
}
