const users = require("./users")
// @ponicode
describe("users.addUserRequest", () => {
    test("0", () => {
        let callFunction = () => {
            users.addUserRequest("foo bar", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users.addUserRequest("Foo bar", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            users.addUserRequest("This is a Text", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            users.addUserRequest("foo bar", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            users.addUserRequest("This is a Text", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            users.addUserRequest(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("users.addUserSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            users.addUserSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users.addUserSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("users.addUserFailure", () => {
    test("0", () => {
        let callFunction = () => {
            users.addUserFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users.addUserFailure("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            users.addUserFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            users.addUserFailure("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            users.addUserFailure("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            users.addUserFailure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("users.updateStatusError", () => {
    test("0", () => {
        let callFunction = () => {
            users.updateStatusError()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("users.removeUser", () => {
    test("0", () => {
        let callFunction = () => {
            users.removeUser(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users.removeUser(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            users.removeUser(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            users.removeUser("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            users.removeUser("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            users.removeUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("users.cleanMsgError", () => {
    test("0", () => {
        let callFunction = () => {
            users.cleanMsgError()
        }
    
        expect(callFunction).not.toThrow()
    })
})
