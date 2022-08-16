fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')
.then(response => response.json())
.then(data => {
    let count = -1;
    let wiiCount = 0;
    let gbCount = 0;
    let ps2Count = 0;
    let snesCount = 0;
    let gbaCount = 0;
    let dsCount = 0;
    let ps3Count = 0;
    let threeDSCount = 0;
    let psCount = 0;
    let xCount = 0;
    let pspCount = 0;
    let x360Count = 0;
    let nesCount = 0;
    let ps4Count = 0;
    let pcCount = 0;
    let wiiData = [];
    let gbData = [];
    let ps2Data = [];
    let snesData = [];
    let gbaData = [];
    let two600Data = [];
    let dsData = [];
    let ps3Data = [];
    let threeDSData = [];
    let psData = [];
    let xData = [];
    let pspData = [];
    let x360Data = [];
    let nesData = [];
    let ps4Data = [];
    let n64Data = [];
    let pcData = [];
    let xOneData = [];
    for (let i = 0; i < data.children.length; i++) {
        for (let j = 0; j < data.children[i].children.length; j++) {
            if (data.children[i].children[j].category == 'Wii') {
                wiiData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'NES') {
                nesData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'GB') {
                gbData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'DS') {
                dsData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'X360') {
                x360Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PS3') {
                ps3Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PS2') {
                ps2Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'SNES') {
                snesData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'GBA') {
                gbaData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PS4') {
                ps4Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == '3DS') {
                threeDSData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'N64') {
                n64Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PS') {
                psData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'XB') {
                xData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PC') {
                pcData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'PSP') {
                pspData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == 'Xone') {
                xOneData.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } else if (data.children[i].children[j].category == '2600') {
                two600Data.push([data.children[i].children[j].name, 
                    data.children[i].children[j].value])
            } 
        }
    }
    
    const svg = d3.select('body')
    .append('svg')
    .attr('id', 'legend')
    .attr('class', 'legend-item')
    .attr('width', 1200)
    .attr('height', 598);

    svg.selectAll('circle')
    .data(wiiData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        wiiCount++;
        return `numberWii${wiiCount}`
    })
    .style('fill', '#1f77b4')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: Wii\nGame: ${wiiData[count][0]}\nValue: ${wiiData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(gbData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        gbCount++;
        return `numberGB${gbCount}`
    })
    .style('fill', '#aec7e8')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: GB\nGame: ${gbData[count][0]}\nValue: ${gbData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(ps2Data)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        ps2Count++;
        return `numberPSTwo${ps2Count}`
    })
    .style('fill', '#ff7f0e')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PS2\nGame: ${ps2Data[count][0]}\nValue: ${ps2Data[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(snesData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        snesCount++;
        return `numberSNES${snesCount}`
    })
    .style('fill', '#ffbb78')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: SNES\nGame: ${snesData[count][0]}\nValue: ${snesData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(gbaData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        gbaCount++;
        return `numberGBA${gbaCount}`
    })
    .style('fill', '#2ca02c')
    .attr('width', d => {
        if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        console.log(gbaData)
        return `Category: GBA\nGame: ${gbaData[count][0]}\nValue: ${gbaData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(two600Data)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id',`number2600`)
    .style('fill', '#98df8a')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: 2600\nGame: ${two600Data[count][0]}\nValue: ${two600Data[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(dsData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        dsCount++;
        return `numberDS${dsCount}`
    })
    .style('fill', '#d62728')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: DS\nGame: ${dsData[count][0]}\nValue: ${dsData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(ps3Data)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        ps3Count++;
        return `numberPS3${ps3Count}`
    })
    .style('fill', '#ff9896')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PS3\nGame: ${ps3Data[count][0]}\nValue: ${ps3Data[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(threeDSData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        threeDSCount++;
        return `number3DS${threeDSCount}`
    })
    .style('fill', '#9467bd')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: 3DS\nGame: ${threeDSData[count][0]}\nValue: ${threeDSData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(psData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        psCount++;
        return `numberPS${psCount}`
    })
    .style('fill', '#c5b0d5')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PS\nGame: ${psData[count][0]}\nValue: ${psData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(xData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        xCount++;
        return `numberX${xCount}`
    })
    .style('fill', '#8c564b')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: XBOX\nGame: ${xData[count][0]}\nValue: ${xData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(pspData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        pspCount++;
        return `numberPSP${pspCount}`
    })
    .style('fill', '#c49c94')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PSP\nGame: ${pspData[count][0]}\nValue: ${pspData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(x360Data)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        x360Count++;
        return `number360x${x360Count}`
    })
    .style('fill', '#e377c2')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: XBOX360\nGame: ${x360Data[count][0]}\nValue: ${x360Data[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(nesData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        nesCount++;
        return `numberNES${nesCount}`
    })
    .style('fill', '#f7b6d2')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: NES\nGame: ${nesData[count][0]}\nValue: ${nesData[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(ps4Data)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        ps4Count++;
        return `numberPS4${ps4Count}`
    })
    .style('fill', '#7f7f7f')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PS4\nGame: ${ps4Data[count][0]}\nValue: ${ps4Data[count][1]}`
    });

    count = -1;

    svg.selectAll('circle')
    .data(pcData)
    .enter()
    .append('rect')
    .classed('tile', true)
    .attr('id', d => {
        pcCount++;
        return `numberPC${pcCount}`
    })
    .style('fill', '#c7c7c7')
    .attr('width', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .attr('height', d => {
        if (parseFloat(d[1]) < 10) {
            return d[1] * 6;
        } else if (parseFloat(d[1]) < 13.40) {
            return d[1] * 5;
        } else {
            return d[1] * 4.5;
        }
    })
    .append('title')
    .text(d => {
        count++;
        return `Category: PC\nGame: ${pcData[count][0]}\nValue: ${pcData[count][1]}`
    });

    count = -1;
});