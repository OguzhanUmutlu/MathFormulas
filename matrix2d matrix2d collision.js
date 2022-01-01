// (0 | 1 | false | true)[][]
matrix2d_1.some((a, y) => matrix2d_2[y] && a.some((b, x) => b && matrix2d_2[y][x]))
