export const colorado = {
    species: [
        {label: 'Elk', value: 'E', disabled: false},
        {label: 'Anteloupe', value: 'A', disabled: true},
        {label: 'Bear', value: 'B', disabled: true},
        {label: 'Deer', value: 'D', disabled: true},
        {label: 'Moose', value: 'M', disabled: true},
    ],
    method: [
        {label: 'Rifle', value: 'R'},
        {label: 'Archery', value: 'A'},
        {label: 'Muzzleloader', value: 'M'}
    ],
    seasons: [
        'O1', 'O2', 'O3', 'O4', 
        // 'E1', 'J2', 'K2', 'K3', 'L1',
        // 'L2', 'L3', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'S2',
        // 'S3', 'S4', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W9'
    ],
    gender: [
        {label: 'Either', value: 'E'},
        {label: 'Male', value: 'M'},
        {label: 'Female', value: 'F'},
    ],
    units: [
        {label: '1', unit: '001'},
        {label: '2', unit: '002'},
        {label: '3', unit: '003'},
        {label: '4', unit: '004'},
        {label: '5', unit: '005'},
        {label: '6', unit: '006'},
        {label: '7', unit: '007'},
        {label: '9', unit: '009'},
        {label: '10', unit: '010'},
        {label: '11', unit: '011'},
        {label: '12', unit: '012'},
        {label: '14', unit: '014'},
        {label: '15', unit: '015'},
        {label: '16', unit: '016'},
        {label: '17', unit: '017'},
        {label: '18', unit: '018'},
        {label: '20', unit: '020'},
        {label: '21', unit: '021'},
        {label: '23', unit: '023'},
        {label: '25', unit: '025'},
        {label: '27', unit: '027'},
        {label: '28', unit: '028'},
        {label: '29', unit: '029'},
        {label: '33', unit: '033'},
        {label: '35', unit: '035'},
        {label: '36', unit: '036'},
        {label: '39', unit: '039'},
        {label: '40', unit: '040'},
        {label: '41', unit: '041'},
        {label: '43', unit: '043'},
        {label: '46', unit: '046'},
        {label: '48', unit: '048'},
        {label: '49', unit: '049'},
        {label: '50', unit: '050'},
        {label: '51', unit: '051'},
        {label: '53', unit: '053'},
        {label: '54', unit: '054'},
        {label: '55', unit: '055'},
        {label: '56', unit: '056'},
        {label: '57', unit: '057'},
        {label: '60', unit: '060'},
        {label: '61', unit: '061'},
        {label: '62', unit: '062'},
        {label: '64', unit: '064'},
        {label: '66', unit: '066'},
        {label: '67', unit: '067'},
        {label: '69', unit: '069'},
        {label: '70', unit: '070'},
        {label: '71', unit: '071'},
        {label: '74', unit: '074'},
        {label: '75', unit: '075'},
        {label: '76', unit: '076'},
        {label: '77', unit: '077'},
        {label: '82', unit: '082'},
        {label: '83', unit: '083'},
        {label: '84', unit: '084'},
        {label: '85', unit: '085'},
        {label: '86', unit: '086'},
        {label: '104', unit: '104'}, 
        {label: '128', unit: '128'}, 
        {label: '133', unit: '133'}, 
        {label: '161', unit: '161'},
        {label: '171', unit: '171'},
        {label: '201', unit: '201'},
        {label: '211', unit: '211'},
        {label: '214', unit: '214'},
        {label: '231', unit: '231'},
        {label: '301', unit: '301'},
        {label: '371', unit: '371'},
        {label: '391', unit: '391'},
        {label: '441', unit: '441'},
        {label: '461', unit: '461'}, 
        {label: '471', unit: '471'},
        {label: '481', unit: '481'}, 
        {label: '500', unit: '500'},
        {label: '501', unit: '501'},
        {label: '551', unit: '551'},
        {label: '561', unit: '561'},
        {label: '851', unit: '851'},
        {label: '13', unit: '013'},
        {label: '19', unit: '019'},
        {label: '22', unit: '022'},
        {label: '26', unit: '026'},
        {label: '30', unit: '030'},
        {label: '31', unit: '031'},
        {label: '32', unit: '032'},
        {label: '34', unit: '034'},
        {label: '38', unit: '038'},
        {label: '42', unit: '042'},
        {label: '44', unit: '044'},
        {label: '52', unit: '052'},
        {label: '59', unit: '059'},
        {label: '63', unit: '063'},
        {label: '68', unit: '068'},
        {label: '72', unit: '072'},
        {label: '73', unit: '073'},
        {label: '79', unit: '079'},
        {label: '80', unit: '080'},
        {label: '81', unit: '081'},
        {label: '131', unit: '131'},
        {label: '142', unit: '142'},
        {label: '181', unit: '181'},
        {label: '191', unit: '191'},
        {label: '361', unit: '361'},
        {label: '411', unit: '411'},
        {label: '421', unit: '421'},
        {label: '511', unit: '511'},
        {label: '521', unit: '521'},
        {label: '581', unit: '581'},
        {label: '591', unit: '591'},
        {label: '681', unit: '681'},
        {label: '682', unit: '682'},
        {label: '711', unit: '711'},
        {label: '741', unit: '741'},
        {label: '751', unit: '751'},
        {label: '45', unit: '045'},
        {label: '47', unit: '047'},
        {label: '444', unit: '444'}
    ],
    // need to add logic in crawler to see depending on an archery/rifle search for elk, whether to make call to db
    otcUnits: {
        'E01A': [
            // north colorado
            3, 4, 5, 301, 161, 6, 301, 44, 214, 14, 16, 17, 171, 18, 181, 27, 15,
            // flat tops
            11, 211, 12, 13, 131, 231,
            // central colorado n i70
            21, 22, 23, 231, 24, 25, 30, 31, 32, 33, 34, 35, 36, 37, 371,
            // central colorado s i70
            41, 42, 421, 411, 52, 521, 53, 54, 55, 551,
            // aspen co
            43, 44, 444, 45, 47, 471,
            54, 54, 55, 551,
            // montrose co
            62, 63, 64, 65, 
            // colorado springs
            511, 581, 59, 591,
            // sangre de cristos
            68, 681, 82, 86, 861, 691, 79,
            // southwest co
            60
            
        ],
        'F01A': [],
        'M02R': [
            // north colorado
            3, 4, 5, 301, 161, 6, 301, 44, 214, 14, 16, 17, 171, 18, 181, 27, 15,
            // flat tops
            11, 211, 12, 13, 131, 231,
            // central colorado n i70
            21, 22, 23, 231, 24, 25, 30, 31, 32, 33, 34, 35, 36, 37, 371,
            // central colorado s i70
            41, 42, 421, 411, 52, 521, 53, 54, 55, 551,
            // aspen co
            43, 44, 444, 45, 47, 471,
            54, 54, 55, 551,
            // montrose co
            62, 63, 64, 65, 
            // colorado springs
            511, 581, 59, 591,
            // sangre de cristos
            68, 681, 82, 86, 861, 691,
            // southwest co
            60, 70, 71 , 711, 72, 73, 74, 741, 75, 751, 77, 771, 78, 80, 81,
            //south co
            85, 851, 133, 134, 140, 141, 142
        ],
        'M03R': [
            3, 4, 5, 301, 161, 6, 301, 44, 214, 14, 16, 17, 171, 18, 181, 27, 15,
            // flat tops
            11, 211, 12, 13, 131, 231,
            // central colorado n i70
            21, 22, 23, 231, 24, 25, 30, 31, 32, 33, 34, 35, 36, 37, 371,
            // central colorado s i70
            41, 42, 421, 411, 52, 521, 53, 54, 55, 551,
            // aspen co
            43, 44, 444, 45, 47, 471,
            54, 54, 55, 551,
            // montrose co
            62, 63, 64, 65, 
            // colorado springs
            511, 581, 59, 591,
            // sangre de cristos
            68, 681, 82, 86, 861, 691,
            // southwest co
            60, 70, 71 , 711, 72, 73, 74, 741, 75, 751, 77, 771, 78, 80, 81,
            //south co
            85, 851, 133, 134, 140, 141, 142
        ]
    }
}