    import { combinedSections } from "../../../components/highcourt/combineSections"
    import { writAppealSections } from "./waData"

    export const WATemplate = (formData) => {
    return new Document({
            sections: [
                {
                    children: [
                        ...combinedSections(formData, writAppealSections["clause-15"]),
                    ]
                }
            ]
        });
    };



