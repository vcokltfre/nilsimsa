/**
 * Compute a nilsimsa digest for the provided buffer
 * @param input - The buffer to compute a digest for
 * @returns Byte digest
 */
export declare function digest(input: Uint8Array): number[];
/**
 * Compute a nilsimsa digest hex for the provided buffer
 * @param input - The buffer to compute a digest for
 * @returns Hexstring digest
 */
export declare function hexDigest(input: Uint8Array): string;
/**
 * Compare two nilsimsa digest byte arrays
 * @param a - The first digest to compare
 * @param b - The second digest to compare
 * @returns Distance value
 */
export declare function compareDigests(a: number[], b: number[]): number;
/**
 * Compare two hex nilsimsa digests
 * @param a - The first digest to compare
 * @param b - The second digest to compare
 * @returns Distance value
 */
export declare function compareHexDigests(a: string, b: string): number;
