$(document).ready(function() {
    $("#orderButton").click(function() {
        let name = $("input[name=username]").val();
        let coffeeType = $("input[name=coffeeType]:checked").val();
        let extras = [];
        $("input[name=extras]:checked").each(function() {
            extras.push($(this).val());
        });

        let total = 0;
        // Add coffee price
        if (coffeeType == "turkish") {
            total += 3;
        } else if (coffeeType == "american") {
            total += 5;
        } else if (coffeeType == "iced_latte") {
            total += 7;
        }

        // Add the extras cost
        for (let i = 0; i < extras.length; i ++) {
            let extra = extras[i];

            if (extra == "extra_coffee") {
                total += 1.5;
            } else if (extra == "whipped_cream") {
                total += 2;
            } else {
                total += 3;
            }
        }

        // Print report
        let output = `Name: ${name} <br/>`;
        output += `Total: $${total}`;

        $("#result").html(output);
    });
});