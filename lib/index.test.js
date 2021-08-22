const rewire = require("rewire")
const index = rewire("./index")
const bcpow = index.__get__("bcpow")
// @ponicode
describe("index.encode", () => {
    test("0", () => {
        let callFunction = () => {
            index.encode(Number.MAX_SAFE_INTEGER)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.encode("+44 7911 123456'")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.encode("0649640808'")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.encode(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.encode(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.encode(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("bcpow", () => {
    test("0", () => {
        let callFunction = () => {
            bcpow("rgb(0,100,200)", "red")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            bcpow("green", "rgb(0.1,0.2,0.3)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            bcpow("black", "rgb(0,100,200)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            bcpow("red", "#F00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            bcpow("rgb(0,100,200)", "hsl(10%,20%,40%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            bcpow(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getlength", () => {
    test("0", () => {
        let callFunction = () => {
            index.getlength(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.getlength(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.getlength(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.getlength(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.getlength(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.getlength(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.reverse", () => {
    test("0", () => {
        let callFunction = () => {
            index.reverse(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["foo bar", "foo bar", 123456789, 123456789], ["\"#'{7855663]}ééàà", "\"#'{7855663]}ééàà", "foo bar", "This is a String1"], ["foo bar", 123456789, 123456789, "\"#'{7855663]}ééàà"], ["p", "p", "\"#'{7855663]}ééàà", "\"#'{7855663]}ééàà"]]
        let callFunction = () => {
            index.reverse(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["foo bar", 123456789, 123456789, "\"#'{7855663]}ééàà"], ["p", "p", "p", "\"#'{7855663]}ééàà"], ["This is a String1", 123456789, "\"#'{7855663]}ééàà", "\"#'{7855663]}ééàà"], ["\"#'{7855663]}ééàà", "This is a String1", 123456789, "\"#'{7855663]}ééàà"]]
        let callFunction = () => {
            index.reverse(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.reverse("p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.reverse("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.reverse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
