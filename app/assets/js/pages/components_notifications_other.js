/* ------------------------------------------------------------------------------
*
*  # Noty and jGrowl notifications
*
*  Specific JS code additions for components_notifications_other.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    // Archive Account
    $('.jgrowl-archive').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('The account has been archived.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Archived!'
        });
    });

    // Re-Activate Account
    $('.jgrowl-unarchive').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('The account is now active. Start making money honey!', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Account Activated!'
        });
    });

    // Create New Account
    $('.jgrowl-create-account').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Your account has been created and is available for spend & revenue updates', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Update Existing Account
    $('.jgrowl-update-account').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Your acount information has been updated.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Updated!'
        });
    });

    // Archive Partner
    $('.jgrowl-archive-partner').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('This partner has been archived and is no longer eligible for RevShare on their accounts', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Partner archived!'
        });
    });

    // Re-Activate Partner
    $('.jgrowl-reactivate-partner').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('This partner is now active and will receive RevShare on their accounts', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Create New Partner
    $('.jgrowl-create-partner').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('New RevShare partner has been created.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Update Existing Partner
    $('.jgrowl-update-partner').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('The partner information has been successfully updated', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Updated!'
        });
    });

    // Submit Invoice
    $('.jgrowl-submit-invoice').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Invoice #548554 for dates 06/21/2017 - 06/31/2017 has been submitted', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });
    
    // Update Invoice
    $('.jgrowl-update-invoice').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Invoice #548554 has been updated.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Delete Spend Invoice
    $('.jgrowl-delete-spend-invoice').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Invoice #548554 has been deleted.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Delete Revenue Invoice
    $('.jgrowl-delete-revenue-invoice').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('Invoice #548554 has been deleted.', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

    // Update Spend & Rev
    $('.jgrowl-update-spend-rev').on('click', function () {
        $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
        $.jGrowl('The spend and revenue has been updated for the account', {
            position: 'bottom-right',
            theme: 'alert-styled-left alert-arrow-left alert-success',
            header: 'Success!'
        });
    });

});
