/**
 * @file CIDME-UI
 * @author Joe Thielen <joe@joethielen.com>
 * @copyright Joe Thielen 2021
 * @license MIT
 */
'use strict';
/**
 * CIDME-UI
 * @author Joe Thielen <joe@joethielen.com>
 * @copyright Joe Thielen 2021
 * @license MIT
 * @version 0.1.0
 */
var CidmeUi = /** @class */ (function () {
    /**
     * CIDME class constructor
     * @constructor
     */
    function CidmeUi() {
    }
    /* ********************************************************************** */
    // FUNCTIONS
    /**
     * Returns HTML containing visual representation of a CIDME entity.
     * @param {string} entityId - CIDME Entity URI string
     */
    CidmeUi.prototype.createBasicEntityCardHtml = function (entityId) {
        var data = '';
        // Remove hyphens from UUIDs for use with HTML IDs
        var idParts = entityId.split('/');
        var entityIdUuid = '';
        //if (idParts.length === '') {
        //entityIdUuid = idParts[(idParts.length - 2)].replace(/-/g, '')
        //} else {
        entityIdUuid = idParts[(idParts.length - 1)].replace(/-/g, '');
        //}
        data += '<div class="cidme_entityContainer" id="cidme_entityContainer_' + entityIdUuid + '">';
        data += '   <div class="cidme_entityCard" id="cidme_entity_' + entityIdUuid + '" aria-label="Entity card">';
        data += '       <div class="cidme_entityCardInner">';
        data += '           <div class="cidme_entityCardHeader">';
        data += '               <div class="cidme_cardCDiv">';
        data += '                   <img class="cidme_cardCImg" src="assets/img/CIDME-UI/CIDME-C.svg" alt="CIDME C icon" />';
        data += '               </div>';
        data += '               <div class="cidme_entityCardEntityIconAlt">';
        data += '                   <img class="cidme_entityCardEntityIconImgAlt" src="assets/img/CIDME-UI/Entity.svg" alt="CIDME entity icon" />';
        data += '                   <span class="cidme_entityCardEntityIconTextAlt" id="cidme_entityCardEntityIconTextAlt_' + entityIdUuid + '">Entity</span>';
        data += '               </div>';
        data += '               <div class="cidme_entityCardEntityTypeAlt">';
        data += '                   <img class="cidme_entityCardEntityTypeImgAlt" id="cidme_entityCardEntityTypeImgAlt_' + entityIdUuid + '" src="assets/img/CIDME-UI/EntityTypeUnknown.svg" alt="CIDME entity type icon" />';
        data += '                   <span class="cidme_entityCardEntityTypeTextAlt" id="cidme_entityCardEntityTypeTextAlt_' + entityIdUuid + '">Type: Unknown</span>';
        data += '               </div>';
        data += '           </div>';
        data += '           <div class="cidme_entityCardBody">';
        data += '               <div class="cidme_entityCardInfo">';
        data += '                   <div class="cidme_entityCardInfoRow1">';
        data += '                       <div class="cidme_entityCardDepiction">';
        data += '                           <img class="cidme_entityCardDepictionImg" id="cidme_entityCardDepictionImg_' + entityIdUuid + '" src="assets/img/CIDME-UI/NoPicture.svg" alt="CIDME entity image" />';
        data += '                       </div>';
        data += '                       <div class="cidme_entityCardLabel">';
        data += '                           <span class="cidme_entityCardLabelText" id="cidme_entityCardLabelText_' + entityIdUuid + '">No label</span>';
        data += '                       </div>';
        data += '                   </div>';
        data += '               </div>';
        data += '           </div>';
        data += '           <div class="cidme_entityCardFooter">';
        data += '               <span class="cidme_entityCardFooterId" id="cidme_entityCardFooterId_' + entityIdUuid + '"></span>';
        data += '           </div>';
        data += '       </div>';
        data += '   </div>';
        data += '   <div class="cidme_entityContextCardsContainer">';
        data += '       <div class="cidme_entityContextCardsContainerBody">';
        data += '           <div class="cidme_entityContextCardsMargin" aria-label="Visual margin">';
        data += '           </div>';
        data += '           <div class="cidme_entityContextCards" id="cidme_entityContextCards_' + entityIdUuid + '">';
        data += '           </div>';
        data += '       </div>';
        data += '       <div class="cidme_entityContextCardsContainerFooter">';
        data += '           <div class="cidme_entityContextCardsMargin" aria-label="Visual margin">';
        data += '           </div>';
        data += '           <div class="cidme_entityContextsAdd" id="cidme_entityContextsAdd_' + entityIdUuid + '" aria-label="Add entity context">';
        data += '               <a href="#" onclick="cidme_addEntityContext(\'' + entityId + '\')">Add Entity Context</a>';
        data += '           </div>';
        data += '       </div>';
        data += '   </div>';
        data += '</div>';
        return data;
    };
    /**
     * Returns HTML containing visual representation of a CIDME entity context.
     * @param {string} entityContextId - CIDME Entity context URI string
     */
    CidmeUi.prototype.createBasicEntityContextCardHtml = function (entityContextId) {
        var data = '';
        // Remove hyphens from UUIDs for use with HTML IDs
        var idParts = entityContextId.split('/');
        var entityContextIdUuid = '';
        //if (idParts.length === '') {
        //entityContextIdUuid = idParts[(idParts.length - 2)].replace(/-/g, '')
        //} else {
        entityContextIdUuid = idParts[(idParts.length - 1)].replace(/-/g, '');
        //}
        data += '   <div class="cidme_entityContextCard" id="cidme_entityContext_' + entityContextIdUuid + '" aria-label="Entity context card">';
        data += '       <div class="cidme_entityContextCardInner">';
        data += '           <div class="cidme_entityContextCardHeader">';
        data += '               <div class="cidme_cardCDiv">';
        data += '                   <img class="cidme_cardCImg" src="assets/img/CIDME-UI/CIDME-C.svg" alt="CIDME C icon" />';
        data += '               </div>';
        data += '               <div class="cidme_entityContextCardEntityContextIconAlt">';
        data += '                   <img class="cidme_entityContextCardEntityContextIconImgAlt" id="cidme_entityContextCardEntityContextIconImgAlt_' + entityContextIdUuid + '" src="assets/img/CIDME-UI/EntityContext.svg" alt="CIDME entity context icon" />';
        data += '                   <span class="cidme_entityContextCardEntityContextIconTextAlt" id="cidme_entityContextCardEntityContextIconTextAlt_' + entityContextIdUuid + '">Entity Context</span>';
        data += '               </div>';
        data += '           </div>';
        data += '           <div class="cidme_entityContextCardBody">';
        data += '               <div class="cidme_entityContextCardInfo">';
        data += '                   <div class="cidme_entityContextCardInfoRow1">';
        data += '                       <div class="cidme_entityContextCardDepiction">';
        data += '                           <img class="cidme_entityContextCardDepictionImg" id="cidme_entityContextCardDepictionImg_' + entityContextIdUuid + '" src="assets/img/CIDME-UI/NoPicture.svg" alt="CIDME entity image" />';
        data += '                       </div>';
        data += '                       <div class="cidme_entityContextCardLabel">';
        data += '                           <span class="cidme_entityContextCardLabelText" id="cidme_entityContextCardLabelText_' + entityContextIdUuid + '">No label</span>';
        data += '                       </div>';
        data += '                   </div>';
        data += '               </div>';
        data += '           </div>';
        data += '           <div class="cidme_entityContextCardFooter">';
        data += '               <span class="cidme_entityContextCardFooterId" id="cidme_entityContextCardFooterId_' + entityContextIdUuid + '"></span>';
        data += '           </div>';
        data += '       </div>';
        data += '   </div>';
        data += '   <div class="cidme_entityContextCardsContainer">';
        data += '       <div class="cidme_entityContextCardsContainerBody">';
        data += '           <div class="cidme_entityContextCardsMargin" aria-label="Visual margin">';
        data += '           </div>';
        data += '           <div class="cidme_entityContextCards" id="cidme_entityContextCards_' + entityContextIdUuid + '">';
        data += '           </div>';
        data += '       </div>';
        data += '       <div class="cidme_entityContextCardsContainerFooter">';
        data += '           <div class="cidme_entityContextCardsMargin" aria-label="Visual margin">';
        data += '           </div>';
        data += '           <div class="cidme_entityContextsAdd" id="cidme_entityContextsAdd_' + entityContextIdUuid + '" aria-label="Add entity context">';
        data += '               <a href="#" onclick="cidme_addEntityContext(\'' + entityContextId + '\')">Add Entity Context</a>';
        data += '           </div>';
        data += '       </div>';
        data += '   </div>';
        return data;
    };
    return CidmeUi;
}());
module.exports = CidmeUi;
