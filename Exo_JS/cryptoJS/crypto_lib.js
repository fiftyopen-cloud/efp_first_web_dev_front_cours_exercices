response = prompt('Message');

has_validated_length(response);

function has_validated_length() {
    return response.length;
}

function count_words(value="") {
    if (value == null) return 0;

    let nb_word = 0;
    for (let i = 0; i < value.length-1; ++i) 
        if (value.charAt(i) == ' ' && value.charAt(i + 1) != ' ' || (i == 0 && value.charAt(i) != ' '))
            ++nb_word;
            
    return nb_word;
}

function count_words_by(value="", delimiter="") {
    // if (value == null) return 0;

    let nb_word = 0;
    for (let i = 0; i < value.length-1; ++i) 
        if (delimiter == value.charAt(i) && delimiter != value.charAt(i + 1)) 
            ++nb_word;
            
    return nb_word == 0 ? 0 : nb_word + 1;
}

function count_vowels(value="") {
    let nb_vowels = 0;

    // if (value == null) return nb_vowels;
    let i = 0;
    while (i < value.length) {

        for (let j = 0; j < value.length; ++j) {
            if (vowels[i].charCodeAt(0) == value.charCodeAt(j)) {
                ++nb_vowels;        
            } 
        }
        ++i;
    }    
        
            // vowels.charCodeAt(i) + 32;

    //     if (value.charAt(i) == 'A' || value.charAt(i) == 'O' || value.charAt(i) == 'U' || 
    //         value.charAt(i) == 'I' || value.charAt(i) == 'Y' || value.charAt(i) == 'E' ||
    //         value.charAt(i) == 'a' || value.charAt(i) == 'o' || value.charAt(i) == 'u' || 
    //         value.charAt(i) == 'i' || value.charAt(i) == 'y' || value.charAt(i) == 'e')
    //         ++nb_vowels;

    return nb_vowels;
}

function count_consonants(value="") {
    // let nb_consonants = 0;

    // if (value == null) return nb_consonants;
    
    // for (let i = 0; i < value.length; ++i) {
    //     if (value.charAt(i) != 'A' && value.charAt(i) != 'O' && value.charAt(i) != 'U' && 
    //         value.charAt(i) != 'I' && value.charAt(i) != 'Y' && value.charAt(i) != 'E' &&
    //         value.charAt(i) != 'a' && value.charAt(i) != 'o' && value.charAt(i) != 'u' && 
    //         value.charAt(i) != 'i' && value.charAt(i) != 'y' && value.charAt(i) != 'e' &&
    //         value.charAt(i) != ' ')
    //         ++nb_consonants;
    // }
    
    // return nb_consonants;

    // remove_spaces = remove(value, ' ');
    return remove_many(value, ' AaOoUuIiYyEe').length;
}

function remove(value="", char="") {
    let new_value = "";
    // if (value == null || char == null) return new_value;

    for (let i = 0; i <= value.length; ++i) {
        utf_char = value.charAt(i);
        if (utf_char != char) new_value += utf_char; 
    }
    return new_value;
}

function remove_many(value="", need="") {
    let new_value = value;
    for (let i = 0; i < need.length; ++i)
        new_value = remove(new_value, need.charAt(i));
    
    return new_value;
}

function crypto(value, offset) {
    let reel_position = 0;
    let new_offset = 0;
    let substitution_char = 0;
    let s = 0;
    let nb_car = 0;
    let code_utf = 0;
    let crypted_value = "";

    for (let i = 0; i < value.length; ++i) {
        code_utf = value.charCodeAt(i);
        range_utf = [[48, 57], [65, 90], [97, 122]];
        if (code_utf != 32) {
            
            for (let j = 0; j < range_utf.length; ++j) {
                if (code_utf >= range_utf[j][0] && code_utf <= range_utf[j][1]) {
                    nb_car = range_utf[j][1] - range_utf[j][0];
                    s = range_utf[j][0];
                    j =range_utf.length;
                }
            }
            
            reel_position = (code_utf - s);
            new_offset = reel_position + offset;
            if (new_offset > nb_car || new_offset < 0) new_offset = (new_offset + nb_car + 1) % (nb_car + 1);
            substitution_char = s + new_offset
            crypted_value += String.fromCharCode(substitution_char);
        } else {
            crypted_value += " ";
        }
    }
    return crypted_value;
}

function decrypt(value, offset) {
    return crypto(value, -offset);
}

function enigma(value) {
    let crypted_value = "";
    crypted_value = decrypt(value, 1);
    return crypted_value;
}


