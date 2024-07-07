export default function (title: string = ""): string {
    const trMap: { [key: string]: string } = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };

    Object.keys(trMap).forEach(key => {
        title = title.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    });

    return title
        .replace(/[^-a-zA-Z0-9\s]+/g, '') // remove non-alphanumeric chars
        .replace(/\s+/g, '-') // convert spaces to dashes
        .replace(/-+/g, '-') // trim repeated dashes
        .toLowerCase();
}
