// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70)
    throw new Error("The humidity level is too high")
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null)
    throw new ArgumentError("The sensor is broken.")
  else if (temperature > 500){
    const myError = new OverheatingError("The temperature is too high.")
    myError.temperature = temperature
    throw myError
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try{
    actions.check()
  }catch (err){
    if (err instanceof ArgumentError)
      actions.alertDeadSensor()
    else if(err instanceof OverheatingError){
      if (err.temperature < 600)
        actions.alertOverheating()
      else
        actions.shutdown()
    }
    else
      throw err
  }
}
