function start() {
    alert("Starting");
    debugger;
    var analyzedGrid = analyze(boot());
    debugger;
}

function boot() {
    var i, j;
    var grid = [];

    for (i = 0; i <= 9; i++)
        grid.push(null);

    for (i = 0; i <= 9; i++) {

        grid[i] = [];

        for (j = 0; j <= 9; j++) {

            grid[i].push(null);

        }

    }
    var data = [
        {
            pos: 12,
            value: 8
        },
        {
            pos: 13,
            value: 2
        },
        {
            pos: 14,
            value: 5
        },
        {
            pos: 17,
            value: 3
        },
        {
            pos: 18,
            value: 1
        },
        {
            pos: 19,
            value: 6
        },
        {
            pos: 22,
            value: 7
        },
        {
            pos: 25,
            value: 1
        },
        {
            pos: 26,
            value: 3
        },
        {
            pos: 27,
            value: 8
        },
        {
            pos: 32,
            value: 4
        },
        {
            pos: 34,
            value: 2
        },
        {
            pos: 37,
            value: 7
        },
        {
            pos: 43,
            value: 8
        },
        {
            pos: 44,
            value: 3
        },
        {
            pos: 45,
            value: 4
        },
        {
            pos: 49,
            value: 2
        },
        {
            pos: 58,
            value: 9
        },
        {
            pos: 64,
            value: 7
        },
        {
            pos: 65,
            value: 5
        },
        {
            pos: 66,
            value: 1
        },
        {
            pos: 67,
            value: 4
        },
        {
            pos: 68,
            value: 3
        },
        {
            pos: 69,
            value: 8
        },
        {
            pos: 73,
            value: 9
        },
        {
            pos: 74,
            value: 1
        },
        {
            pos: 77,
            value: 2
        },
        {
            pos: 79,
            value: 3
        },
        {
            pos: 82,
            value: 2
        },
        {
            pos: 83,
            value: 1
        },
        {
            pos: 85,
            value: 3
        },
        {
            pos: 86,
            value: 5
        },
        {
            pos: 87,
            value: 9
        },
        {
            pos: 88,
            value: 6
        },
        {
            pos: 89,
            value: 7
        },
        {
            pos: 91,
            value: 3
        },
        {
            pos: 93,
            value: 7
        },
        {
            pos: 96,
            value: 2
        },
        {
            pos: 97,
            value: 1
        },
        {
            pos: 98,
            value: 8
        }
    ];
    var x, y;
    data.forEach(function (item) {
        x = parseInt((item.pos + "").substr(0, 1));
        y = parseInt((item.pos + "").substr(1, 1));
        grid[x][y] = item.value;
    });

    return grid;
}

function print(data) {
    var i, j, str = "", val;
    str += "######SUDOKU###########" + "<br>";
    str += "#########################" + "<br>";

    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            val = (data[i][j] == null) ?
                "_" :
                data[i][j];

            switch (j) {
                case 1:
                {
                    str += "###" + val;
                }
                    break;
                case 9:
                {
                    str += "#" + val + "###";
                }
                    break;
                case 4:
                {
                    str += "##" + val;
                }
                    break;
                case 7:
                {
                    str += "##" + val;
                    break;
                }
                default:
                {
                    str += "#" + val;
                }
            }
        }
        str += "<br>";
    }
    str += "#########################";

    document.getElementById("sudoku").innerHTML = str;
}

function exists(val, collection) {
    var at = collection.indexOf(val);
    if (at != -1) {
        return at;
    } else
        return false;
}

function remove(val, collection) {
    var at = exists(val, collection);
    if (at || at >= 0) {
        collection.splice(at, 1);
    }
    return collection;
}

function extractor(includedElements) {
    var basicElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    includedElements.forEach(function (element) {
        this.basicElements = remove(element, basicElements);
    }, this);

    return basicElements;
}

function analyze(grid) {
    debugger;
    var i, j, k, l, results, quad, quadEnum = 0;
    grid[0][0] = {};
    grid[0][0] = {};
    // Analize rows
    for (i = 1; i <= 9; i++)
        grid[i][0] = analyzeRow(grid[i]);
    // Analyze column
    for (j = 1; j <= 9; j++)
        grid[0][j] = analyzeRow(grid[j]);
    // Analyze quads
    for (k = 1; k <= 9; k += 3) {
        for (l = 1; l <= 9; l += 3) {
            quad = [];
            for (i = k; i < k + 3; i++) {
                for (j = l; j < l + 3; j++) {
                    quad.push(grid[i][j]);
                }
            }
            quadEnum++;
            grid[0][0]['q' + quadEnum] = analyzeRow(quad);
        }
    }

    return grid;
}
function analyzeRow(row) {

    var inElements = [];

    row.forEach(function (item) {
        if (item != null) {
            inElements.push(item);
        }
    }, this);

    return {
        in: inElements,
        out: extractor(inElements)
    }

}
function cellPossibles(row, col, grid) {
    var rowPossibles, colPossibles, qPossibles;

    rowPossibles = grid[row][0].out;
    colPossibles = grid[0][col]
}



