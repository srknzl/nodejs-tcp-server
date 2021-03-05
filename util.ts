interface ArithmeticResult {
    error: string;
    result: number;
}

const checkValidArgs = (message: string): boolean => {
    let re = /^[\d,-.]+$/;
    return message.match(re) !== null
}

export const sumArgs = (message: string): ArithmeticResult => {
    let total = 0;
    if (!checkValidArgs(message.substr(1))) {
        return {
            result: total,
            error: `Invalid args.\n`
        }
    }
    for (const part of message.substr(1).split(',')) {
        const num = Number.parseFloat(part);
        if (isNaN(num)) {
            return {
                result: total,
                error: `The string ${part} is not a valid number.\n`
            }
        }
        total += num;
    }
    return {
        result: total,
        error: null
    };
};


export const multiplyArgs = (message: string): ArithmeticResult => {
    let total = 1;
    if (!checkValidArgs(message.substr(1))) {
        return {
            result: total,
            error: `Invalid args.\n`
        }
    }
    for (const part of message.substr(1).split(',')) {
        const num = Number.parseFloat(part);
        if (isNaN(num)) {
            return {
                result: total,
                error: `The string ${part} is not a valid number.\n`
            }
        }
        total *= num;
    }
    return {
        result: total,
        error: null
    };
};
