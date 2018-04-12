/**
 * 求最大公约数 欧几里得算法
 * @param {int} p 非负
 * @param {int} q 非负
 */
export default function gcd(p, q) {
    if (q === 0) {
        return p;
    }
    return gcd(q, p % q);
}
