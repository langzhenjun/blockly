Blockly.Blocks['math_fibonacci'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("if Fib(1)=")
            .appendField(new Blockly.FieldNumber(0), "n1")
            .appendField("and Fib(2)=")
            .appendField(new Blockly.FieldNumber(1), "n2");
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(", return Fib(");
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['math_fibonacci'] = function (block) {
    var number_n1 = block.getFieldValue('n1');
    var number_n2 = block.getFieldValue('n2');
    var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);

    if (number_x == "") {
        number_x = 1;
    }

    var code = '\
    (function fib(n) {\
        if (n == 1) return ' + number_n1 + ';\
        if (n == 2) return ' + number_n2 + ';\
        return fib(n-1) + fib(n-2);\
    })(' + number_x + ')';

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};