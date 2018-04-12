/**
 * 二分查找
 * @param {number} key
 * @param {Array} arr
 */
export default function binarySearch(key, arr) {
    let lo = 0,
        hi = arr.length - 1;
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let value = arr[mid];
        if (value < key) {
            lo = mid + 1;
        } else if (value > key) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
