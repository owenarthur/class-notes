const userNameMap: Record<string, string> = {
  usr_1: 'Michael',
}

const getUserName = (userID: string): string | null => {
  const name = userNameMap[userID]
  if (!name) {
    throw new Error('CANNOT FIND USER')
  }
  return name
}

function sendMessageToUser(userID: string, message: string) {
  try {
    const userName: string | null = getUserName(userID)
    console.log(userName, message)
  } catch (err) {
    console.log('We saw an error: ', err)
  }
  console.log('fin')
}

sendMessageToUser('usr_2', 'hi')

function recurse() {
  recurse()
}

function stackError() {
  try {
    recurse()
  } catch (err) {
    console.log('error', err)
  }
}

// stackError()

function bigArray() {
  let array: any[] = []
  while (true) {
    array.push(new Array(1024 * 1024))
  }
}

function heapError() {
  try {
    bigArray()
  } catch (err) {
    console.log('error', err)
  }
}

// heapError()

// stack overflow
/**
 * call recurse
 * call recurse
 * call recurse
 * call recurse
 * call recurse
 * call recurse
 * call recurse
 * string owen
 * number 8
 */
