// Substrings
function filterStringList(string_list, substring_list) {
    let output_list = [];
    let current_string = '';
    let current_substring = '';
    for (let i = 0; i < string_list.length; i++) {
        current_string = string_list[i];
        for (let j = 0; j < substring_list.length; j++) {
            current_substring = substring_list[j];
            if (current_string.includes(current_substring)) {
                output_list.push(current_string)
                break
            }
        }
    }
    return output_list;
}

let my_strings = ['banana', 'apple', 'application', 'applied', 'food', 'beach', 'bean'];
let my_substrings = ['app', 'bea'];

let filtered_strings = filterStringList(my_strings, my_substrings);
console.log(filtered_strings);





function filterStringList(string_list, substring_list) {
    // Use the filter method to process each string in string_list
    return string_list.filter(current_string =>
        // Use the some method to check if any substring is found in the current_string
        substring_list.some(current_substring =>
            // Check if current_string includes current_substring
            current_string.includes(current_substring)
        )
    );
}



// Example arrays
let my_strings_two = ['banana', 'apple', 'application', 'applied', 'food', 'beach', 'bean'];
let my_substrings_two = ['app', 'bea'];

// Call the function and store the result
let filtered_strings_two = filterStringList(my_strings_two, my_substrings_two);

// Output the result
console.log(filtered_strings_two); // ['apple', 'application', 'applied', 'beach', 'bean']




// List filtering
let number_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let filtered_number_list = number_list.filter(num => (num % 2) == 0);
console.log(filtered_number_list)




