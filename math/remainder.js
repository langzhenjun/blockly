Blockly.Blocks['math_remainder'] = {
    init: function () {
        this.appendValueInput("n1")
            .setCheck("Number");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("%");
        this.appendValueInput("n2")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['math_remainder'] = function (block) {
    var number_n1 = Blockly.JavaScript.valueToCode(block, 'n1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_n2 =  Blockly.JavaScript.valueToCode(block, 'n2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '((' + number_n1 + ') % (' + number_n2 + '))';
    return [code, Blockly.JavaScript.ORDER_NONE];
};