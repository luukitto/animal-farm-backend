import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAnimals1739019520815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO animal (name, type)
            VALUES
                ('შალვა პაპუაშვილი', 'უფროსი ღორი'),
                ('მამუკა მდინარაძე', 'პროპაგანდისტი ღორი'),
                ('გიორგი ვოლსკი', 'მოხუცი ღორი'),
                ('თეა წულუკიანი', 'უმოწყალო ძაღლი'),
                ('კახა კალაძე', 'მედიდური ღორი'),
                ('ირაკლი კობახიძე', 'მთავარი ღორი'),
                ('სოზარ სუბარი', 'მორჩილი ღორი'),
                ('ნინო წილოსანი', 'მლიქვნელი ცხვარი'),
                ('ილია ინჯია', 'მატყუარა ყვავი'),
                ('გიორგი კახიანი', 'ჩუმი ღორი'),
                ('გრიგოლ აბესაძე', 'დამჯერე ცხვარი'),
                ('აკაკი ალადაშვილი', 'მორჩილი ძაღლი'),
                ('თეონა აკუბარდია', 'ფხიზელი ძაღლი'),
                ('გიორგი ბარვენაშვილი', 'ერთგული ძაღლი'),
                ('გია ბენაშვილი', 'მყეფარე ძაღლი'),
                ('რამინა ბერაძე', 'გულმოდგინე ცხენი'),
                ('თორნიკე ბერეკაშვილი', 'მუყაითი ცხენი'),
                ('შოთა ბერეკაშვილი', 'მორჩილი ცხენი'),
                ('არჩილ ბერიძე', 'უსიტყვო ცხვარი'),
                ('ირმა ზავრადაშვილი', 'მოლაქლაქე ქათამი'),
                ('ირაკლი ზარქუა', 'ქედმოხრილი ცხვარი'),
                ('ზაზა თავაძე', 'ჩუმი თხა'),
                ('ედიშერ თოლორაია', 'მორჩილი ცხვარი'),
                ('ვახტანგ თურნავა', 'დაღლილი ცხენი'),
                ('რატი იონათამიშვილი', 'გამყიდველი ვირი'),
                ('დავით კაჭარავა', 'გაწვრთნილი ძაღლი'),
                ('ვლადიმერ კახაძე', 'უსულგულო ძაღლი'),
                ('პაატა კვიჟინაძე', 'მშიშარა ცხვარი'),
                ('ირაკლი კირცხალია', 'მორჩილი ცხვარი'),
                ('სუმბატ კიურეგიანი', 'ბრიყვი ვირი'),
                ('დათო კოდუა', 'უხმო ცხვარი'),
                ('მარიამ ლაშხი', 'მოთვინიერებული ქათამი'),
                ('ბექა ლილუაშვილი', 'უნებისყოფო ცხვარი'),
                ('ვარლამ ლიპარტელიანი', 'მორჩილი ცხენი'),
                ('ზაზა ლომინაძე', 'ჩუმი ცხვარი'),
                ('დავით მათიკაშვილი', 'მლიქვნელი ძაღლი'),
                ('სამველ მანუკიანი', 'მოხრილი ცხვარი'),
                ('ლევან მაჭავარიანი', 'უსუსური ცხვარი'),
                ('გურამ მაჭარაშვილი', 'მორჩილი ცხენი'),
                ('ლევან მახაშვილი', 'უძლური ცხვარი'),
                ('გივი მიქანაძე', 'მონური ცხვარი'),
                ('ზაალ მიქელაძე', 'მორჩილი ცხვარი'),
                ('იმედა ნიკურაძე', 'ერთგული ძაღლი'),
                ('ანტონ ობოლაშვილი', 'უსიტყვო ცხვარი'),
                ('გენო პეტრიაშვილი', 'მორჩილი ცხენი'),
                ('ზურაბ რურუა', 'დამჯერე ცხვარი'),
                ('პაატა სალია', 'მლიქვნელი ძაღლი'),
                ('გელა სამხარაული', 'უნებისყოფო ცხვარი'),
                ('დიმიტრი სამხარაძე', 'მორჩილი ღორი'),
                ('ნიკოლოზ სამხარაძე', 'მლიქვნელი ღორი'),
                ('ვიქტორ სანიკიძე', 'ბრმა ცხვარი'),
                ('ეკა სეფაშვილი', 'მორჩილი ქათამი'),
                ('ბერდია სიჭინავა', 'უსუსური ცხვარი'),
                ('გიორგი სოსიაშვილი', 'მუნჯი ცხვარი'),
                ('ალექსანდრე ტაბატაძე', 'დამჯერე ძაღლი'),
                ('ლაშა ტალახაძე', 'ძლიერი ცხენი'),
                ('ნოდარ ტურძელაძე', 'მორჩილი ცხვარი'),
                ('ირაკლი ქადაგიშვილი', 'მუნჯი ძაღლი'),
                ('კახაბერ კემოკლიძე', 'ერთგული ძაღლი'),
                ('როინ კოჭორაშვილი', 'მორჩილი ცხვარი'),
                ('ალუდა ღუდუშაური', 'უსიტყვო ცხვარი'),
                ('ზვიად შალამბერიძე', 'მლიქვნელი ცხვარი'),
                ('თენგიზ შარმანაშვილი', 'მორჩილი თხა'),
                ('ლიკა შარტავა', 'დამჯერე ქათამი'),
                ('გოდერძი ჩანქსელიანი', 'ბრმა ცხვარი'),
                ('ვასილ ჩიგოგიძე', 'მორჩილი ცხვარი'),
                ('დიმიტრი ცქიტიშვილი', 'უსულო ძაღლი'),
                ('ზვიად ძიძიგური', 'მოხუცი ღორი'),
                ('ბეჟან ცაკაძე', 'მორჩილი ცხვარი'),
                ('გენრიეტა წიწავა', 'მლიქვნელი ქათამი'),
                ('თორნიკე ჭეიშვილი', 'უსიტყვო ცხვარი'),
                ('ირაკლი ჭეიშვილი', 'მორჩილი ცხვარი'),
                ('გივი ჩიჩინაძე', 'დამჯერე ცხვარი'),
                ('ეკა ჩიჩინაძე', 'მორჩილი ქათამი'),
                ('გიორგი ჭკონია', 'უნებისყოფო ცხვარი'),
                ('შოთა ხაბარელი', 'ძველი ცხენი'),
                ('გიორგი ხახუბია', 'მორჩილი ცხვარი'),
                ('ირაკლი ხელაძე', 'უსიტყვო ცხვარი'),
                ('ვლადიმერ ხინჩეგაშვილი', 'ძლიერი ცხენი'),
                ('დიმიტრი ხუნდაძე', 'მყეფარე ძაღლი'),
                ('ვიქტორ ჯაფარიძე', 'მორჩილი ცხვარი'),
                ('სალომე ჯინჯოლავა', 'ჩუმი ქათამი')
            ON CONFLICT DO NOTHING
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM animal
        `);
    }

}