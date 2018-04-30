/**
 *
 * @param {String} expr 运算表达式
 */
export default function evaluate(expr) {
    const OPRS = ['+', '-', '*', '/'];
    const ops = [],
        vals = [];
    expr = expr.split(' ');
    for (let char of expr) {
        switch (char) {
            case '(':
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case 'sqrt':
                ops.push(char);
                break;
            case ')': {
                let op = ops.pop();
                let val = vals.pop();
                // console.log(op, val)
                if (op === '+') val = vals.pop() + val;
                else if (op === '-') val = vals.pop() - val;
                else if (op === '*') val = vals.pop() * val;
                else if (op === '/') val = vals.pop() / val;
                else if (op === 'sqrt') val = Math.sqrt(val);
                vals.push(val);
                break;
            }
            default:
                vals.push(Number(char));
        }
    }
    return vals.pop();
}
