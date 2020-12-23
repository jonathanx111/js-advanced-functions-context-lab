/* Your Code Here */
let createEmployeeRecord = function(employeeRecord) {
    return {
    firstName: employeeRecord[0],
    familyName: employeeRecord[1],
    title: employeeRecord[2],
    payPerHour: employeeRecord[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

let createEmployeeRecords = function(employees)  {
    return employees.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateTime) {
    let [date, hour] = dateTime.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10)
    })

    return this
}

let createTimeOutEvent = function (dateTime) {
    let [date, hour] = dateTime.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    })

    return this
}

let hoursWorkedOnDate = function (dats) {
    let inEvent = this.timeInEvents.find(function(e) {
        return e.date === dats
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === dats
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function (date) {
    let rawWage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function() {
    let dates = this.timeInEvents.map(function(e){
        return e.date
    })

    let pay = dates.reduce(function(accumulator, day){
        return accumulator + wagesEarnedOnDate.call(this, day)
    }.bind(this), 0)

    return pay
}

let findEmployeeByFirstName = function(emps, firstName) {
    return emps.find(function(emp){
        return emp.firstName = firstName
    })
}

let calculatePayroll = function (arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function (memo, rec) {
        return memo + allWagesFor.call(rec)
    }, 0)
}
