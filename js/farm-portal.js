var STAKINGCONTRACT_ADDRESS = "0xcFe9E14205Dec27f951B709ed22B4766FbdD7Acb";
var STAKINGCONTRACT_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "claimer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "stakingRatePerHour", "type": "uint256" }], "name": "StakingRateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "claimer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "stakedTokens", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "inputs": [], "name": "ClaimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ClaimStakedTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "Exit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "KEK", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_caller", "type": "address" }], "name": "PendingReward", "outputs": [{ "internalType": "uint256", "name": "_pendingReward", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "RPepe", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "Stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "TotalStakeRewardsClaimed", "outputs": [{ "internalType": "uint256", "name": "_totalEarned", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "YourActiveStake", "outputs": [{ "internalType": "uint256", "name": "_activeStake", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "YourStakingRate", "outputs": [{ "internalType": "uint256", "name": "_stakingRate", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "YourTotalStakes", "outputs": [{ "internalType": "uint256", "name": "_totalStakes", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentStakingRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "findTwoPointFivePercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

var RPepeCONTRACT_ADDRESS = "0x3001a582230BC403260b423a10F7c97814b8ebBB";
var RPepeCONTRACT_ABI = [{ "inputs": [], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basePercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "findTwoPointFivePercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address[]", "name": "receivers", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "name": "multiTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

var STAKINGCONTRACT, accounts, RPepeCONTRACT, allowance, RPepeBalance;
var approvalMsg = 'Please approve staking contract to move your rPepe';

function stats() {
    contractInitialization(STAKINGCONTRACT_ADDRESS, STAKINGCONTRACT_ABI).then(C => {
        STAKINGCONTRACT = C;
        STAKINGCONTRACT.methods.PendingReward(accounts[0]).call().then(reward => {
            $('#KEKEarned').html(numberWithCommas(truncateTo(4, reward / 10 ** 18)));
        });
        STAKINGCONTRACT.methods.currentStakingRate().call().then(rate => {
            var perHr = rate / 10 ** 18;
            console.log(perHr);
            var APY = perHr * 8760;
            APY = truncateTo(1, APY);
            $('#poolOneAPY').html(APY + "%");
        });
    });

    contractInitialization(RPepeCONTRACT_ADDRESS, RPepeCONTRACT_ABI).then(C => {
        RPepeCONTRACT = C;
        RPepeCONTRACT.methods.balanceOf(accounts[0]).call().then(balance => {
            RPepeBalance = balance;
            $('#RPepeBalance').html(numberWithCommas(truncateTo(4, balance / 10 ** 18)));
        });
    });
}
$(function() {

    // $('#poolOneAPY').html(80);
    // $('#poolTwoAPY').html(0);

    metamaskIntegration().then(x => {

        getNetwork();
        stats();
        setInterval(function() {
            stats();
        }, 20000);
    });


    $('#harvestOne').click(function(e) {
        e.preventDefault();
        STAKINGCONTRACT.methods.ClaimReward().send({
            from: accounts[0],
            gasLimit: 140000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $('#transactionStatus').html('Transaction submitted. Rewards will be in your wallet shortly');
            $('#transactionModal').modal('show');
        }).on('confirmation', function(confirmationNumber, receipt) {

        });
    });

    $('#harvestUnstakeOne').click(function(e) {
        e.preventDefault();
        STAKINGCONTRACT.methods.Exit().send({
            from: accounts[0],
            gasLimit: 140000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $('#transactionStatus').html('Transaction submitted. Tokens and Rewards(if any) will be in your wallet shortly');
            $('#transactionModal').modal('show');
        }).on('confirmation', function(confirmationNumber, receipt) {

        });
    });


    $('#stakeOne').click(function(e) {
        e.preventDefault();
        $('#stakeOneModal').modal('show');
        $('#stackInputOne').val('');
        // $('#approve + p').removeClass('d-none');
        $('#confirmStakeOne').attr('disabled', '');
        $('#confirmStakeOne + p').addClass('d-none');
        $('#approve + p').addClass('d-none');
        $('#approve').addClass('d-none');
        $('.view-a').addClass('d-none');
    });


    $('#stackInputOne').keyup(function() {
        RPepeCONTRACT.methods.allowance(accounts[0], STAKINGCONTRACT_ADDRESS).call().then(allowed => {
            allowance = allowed;
            if ($(this).val() > allowance) {
                $('#approve + p').removeClass('d-none');
                $('#approve').removeClass('d-none');
                $('#approve + p').html(approvalMsg);
                $('#approve').find('.after').addClass('d-none');
                $('#approve').find('.before').removeClass('d-none');
                $('#confirmStakeOne').attr('disabled', '');
                $('#confirmStakeOne + p').addClass('d-none');
            } else {
                $('#approve').addClass('d-none');
                $('#approve + p').addClass('d-none');
                $('#confirmStakeOne').removeAttr('disabled');
                $('#confirmStakeOne + p').removeClass('d-none');
            }
        });
    });

    $('.max-button').click(function(e) {
        e.preventDefault();
        $(this).parents('.position-relative').find('input').val(RPepeBalance / 10 ** 18);
        //$(this).parents('.position-relative').find('button#approve').removeAttr('disabled');
        RPepeCONTRACT.methods.allowance(accounts[0], STAKINGCONTRACT_ADDRESS).call().then(allowed => {
            allowance = allowed;
            if ($(this).parents('.position-relative').find('input').val() > allowance) {
                $('#approve + p').removeClass('d-none');
                $('#approve').removeClass('d-none');
                $('#approve + p').html(approvalMsg);
                $('#approve').find('.after').addClass('d-none');
                $('#approve').find('.before').removeClass('d-none');
                $('#approve').removeAttr('disabled');
                $('#confirmStakeOne').attr('disabled', '');
                $('#confirmStakeOne + p').addClass('d-none');
            } else {
                $('#approve').addClass('d-none');
                $('#approve + p').addClass('d-none');
                $('#confirmStakeOne').removeAttr('disabled');
                $('#confirmStakeOne + p').removeClass('d-none');
            }
        });
    });


    $('#approve').click(function(e) {
        e.preventDefault();

        RPepeCONTRACT.methods.approve(STAKINGCONTRACT_ADDRESS, RPepeBalance).send({
            from: accounts[0],
            gasLimit: 100000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {
            $('#approve').find('.before').addClass('d-none');
            $('#approve').find('.after').removeClass('d-none');
            $('#approve').attr('disabled', '');
            $('#approve + p').html('Pending... Keep the pop up open');

            $('#approve ~ .view-a').removeClass('d-none').html('View on Etherscan').attr('href', 'https://ropsten.etherscan.io/tx/' + hash);

        }).on('confirmation', function(confirmationNumber, receipt) {
            $('#approve').find('.after').addClass('d-none');
            $('#approve').find('.before').removeClass('d-none');
            $('#approve + p').addClass('d-none');

            $('#confirmStakeOne').removeAttr('disabled');
            $('#confirmStakeOne + p').removeClass('d-none').html('Ready to stake?');
            RPepeCONTRACT.methods.allowance(accounts[0], STAKINGCONTRACT_ADDRESS).call().then(allowed => {
                allowance = allowed;
            });
            $('#approve ~ .view-a').removeClass('d-none').html('<i class="fa fa-check mr-1"></i> Confirmed').attr('href', 'https://ropsten.etherscan.io/tx/' + receipt);
        });
    });


    $('#confirmStakeOne').click(function(e) {
        e.preventDefault();
        let formVal = $('#stackInputOne').val();

        STAKINGCONTRACT.methods.Stake((convert(formVal * 10 ** 18)).toString()).send({
            from: accounts[0],
            gasLimit: 180000,
            gasPrice: 21000000000 //21 Gwei
        }).on('transactionHash', function(hash) {

            $('#confirmStakeOne').attr('disabled', '');
            $('#confirmStakeOne + p').removeClass('d-none').html('<i class="fa fa-check mr-1"></i> Transaction submitted');
            $('#confirmStakeOne ~ .view-a').removeClass('d-none').html('View on Etherscan ').attr('href', 'https://ropsten.etherscan.io/tx/' + hash);

        }).on('confirmation', function(confirmationNumber, receipt) {

        });
    });

});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

async function metamaskIntegration() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {} else {
        alert("The File APIs are not fully supported in this browser.");
    }

    //Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            //Request account access
            //if needed
            metaMask = false;
            ethereum.enable().then(metaMask = true);
        } catch (error) {
            metaMask = false;
            alert('Connect to metamask');
            //User denied account access...
        }
    }
    //Legacy dapp browsers...
    else if (window.web3) {
        metaMask = true;
        window.web3 = new Web3(web3.currentProvider);
    }
    //Non - dapp browsers...
    else {
        metaMask = false;
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    if (metaMask) {
        $('#account').removeClass('d-none');
    } else {

    }

    window.ethereum.on('accountsChanged', function(_accounts) {
        // Time to reload your interface with accounts[0]!
        // window.location.reload(true);
    });

    await web3.eth.getAccounts(function(error, result) {
        if (!error) {
            accounts = result;
        } else
            console.error(error);
    });
}

async function contractInitialization(contractAddress, contractABI) {
    return (await new web3.eth.Contract(contractABI, contractAddress));
}

function convert(n) {
    var sign = +n < 0 ? "-" : "",
        toStr = n.toString();
    if (!/e/i.test(toStr)) {
        return n;
    }
    var [lead, decimal, pow] = n.toString()
        .replace(/^-/, "")
        .replace(/^([0-9]+)(e.*)/, "$1.$2")
        .split(/e|\./);
    return +pow < 0 ?
        sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
        sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
}

async function getNetwork() {
    var net = await web3.eth.net.getNetworkType();
    if (net != "ropsten") {
        $('#connectWallet').html('Switch to Ropsten Network');
    } else {
        $('#connectWallet').html(accounts[0].substring(0, 6) + '...' + accounts[0].substring(36, 42));
    }
}

function truncateTo(digits, number) {
    return Math.trunc(number * Math.pow(10, digits)) / Math.pow(10, digits);
}