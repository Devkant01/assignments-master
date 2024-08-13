function getTime() {
    const time = new Date();
    let hr = time.getHours();
    let AP = 'AM';
    if (hr > 12) {
        hr = hr - 12;
        AP = 'PM';
    }
    console.log(`${String(hr).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}::${String(time.getSeconds()).padStart(2, '0')} ${AP}`);
    // String(variable).padStart(count, leftOver) here used to format ans
}

setInterval(getTime, 1000);
